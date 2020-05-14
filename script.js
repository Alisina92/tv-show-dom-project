//You can edit ALL of the code here
/*fetches the the data from the Maze Api*/
const rootElem = document.getElementById("root"); // parent of All my elements
let allShows;
let displayResult;

fetch("https://api.tvmaze.com/shows")
  .then((response) => response.json())
  .then((shows) => {
    allShows = shows;
  });

/* setup function will call all the functions that makes the different part of the page */
/* 1 first part setup */
function setup() {
  displayResult = `The total is: 0 /${allShows.length}`; // display the number of episodes.
  createHeader(displayResult); // Calls a function that creates the header section.
  createDrdShows(); //Calls a drop list function.
  displayEpisodeList();
  makePageForShows(allShows);
  //makePageForEpisodes(allShows); //calls make page for episode function.
  createFooter(); // calls create footer function.
 
}
/*2 creates header*/

/*Creates header function that displays the header element */
function createHeader(displayResult) {
  const headerElement = document.getElementsByTagName("header"); // Selects the header element based on the Id that it's have
  const spanDisplayResult = document.createElement("span"); // Creates the span tag.
  spanDisplayResult.id = "numberOfMatchingTitle"; // Assigns an id to the span tag.
  spanDisplayResult.innerText = displayResult; // Assign the The total is: 0 /73 elements to span element.
  headerElement[0].appendChild(spanDisplayResult); // Appended the span to the header element.

  let theForm = document.createElement("form"); // Created the form element.
  theForm.id = "search-box"; // Assigned it an id called search-box.
  headerElement[0].appendChild(theForm); //Appended a form to header element.

  let theInputText = document.createElement("input"); // Created the input Element.
  theInputText.id = "userInput"; //Assigned an id to called userInput.
  theInputText.type = "text"; //Set the Type to text.
  theInputText.placeholder = "Search a film..."; //Assigned the placeHolder text to it.
  theForm.appendChild(theInputText); //Appended the input to form.
  theInputText.addEventListener("input", (event) => {
    //eventListener that calls the search function.
    search(theInputText.value.trim()); // Trimmed value of user input is passed to the search function.
  });
}
function makePageForShows(showData) {
  rootElem.textContent = ""; // Set the of the root to blank as my the root content is the parent of my elements

  showData.forEach((e) => {
    //   // Loops through the episode list
    setShowHTML(e); // repeats set episode function to create the structure of the page.
  });
}
function setShowHTML(show) {
  let theContainer = document.createElement("div"); //Creates an div element assign it assign it to the container element.
  theContainer.setAttribute("value", "");
  theContainer.setAttribute("class", "xl-col-4 placeHolder"); // Assign the Class of "xl-col-4" from the grid CSS file.
  rootElem.appendChild(theContainer); // Appended the div element to the parent element of root.

  let theArticle = document.createElement("article"); // Creates an article element.
  theArticle.id = "article"; //Assigned the id of article to the article.
  theArticle.setAttribute("class", "artContainer"); // Assigned the class of artContainer to the Article element.
  theContainer.appendChild(theArticle); // Appended the Article to the div of our placeholder.

  let theTitleTagName = document.createElement("h3"); //Created the a h3 element to hold the title.
  theArticle.appendChild(theTitleTagName); // Appended the h3 element to the article Container.
  theTitleTagName.textContent = `${show.name}`; /*-${titleMaker(
    element.season,
    element.number
  )}`;*/ // Set the the text content of the h3 element the object name property called the title maker maker function
  theTitleTagName.id = "title"; // Set the id of h3 element to 'title'.

  let theImageTagName = document.createElement("img"); // created an image element.
  theArticle.appendChild(theImageTagName); // Appended the image tag to the article parents.
  theImageTagName.id = "image"; //Set an id of 'image to it'

  var noImage = "";
  show.image == null ? noImage : (noImage = show.image.medium);
  theImageTagName.src = noImage;
  //Assigned the medium image object property to img element.
  let theParagraph = document.createElement("p"); // Created Paragraph element.

  theParagraph.textContent = show.summary.replace(/(<([^>]+)>)/gi, ""); //set the paragraph text content to the summary object property and remove the preset p tag using replace method
  theParagraph.id = "summary"; //Set the id of summary to the paragraph element.
  theArticle.appendChild(theParagraph); // Appended the paragraph to the article
}


/* This function renders All The content of the page */
function makePageForEpisodes(showId) {
  
  rootElem.textContent = ""; // Set the of the root to blank as my the root content is the parent of my elements
   
  if(showId != 0){
    fetchEpisodesAsync(showId).then(episodesData=>{
       
      //console.log(episodesData)
       episodeDropList(episodesData);
      episodesData.forEach (e=>{
          
          setEpisodesHTML(e);
         
        })
    });
    
  }else{
    makePageForShows(allShows);
  }
 }
 
    
    /*This function will create the basic structure of one episode Title image and description that takes element as an argument*/
    
    /*4th creates episode content */
    function setEpisodesHTML(element) {
     //console.log(element);
  //Elements are the object inside of the array.
  let theContainer = document.createElement("div"); //Creates an div element assign it assign it to the container element.
  theContainer.setAttribute("value", "");
  theContainer.setAttribute("class", "xl-col-4 placeHolder"); // Assign the Class of "xl-col-4" from the grid CSS file.
  rootElem.appendChild(theContainer); // Appended the div element to the parent element of root.

  let theArticle = document.createElement("article"); // Creates an article element.
  theArticle.id = "article"; //Assigned the id of article to the article.
  theArticle.setAttribute("class", "artContainer"); // Assigned the class of artContainer to the Article element.
  theContainer.appendChild(theArticle); // Appended the Article to the div of our placeholder.

  let theTitleTagName = document.createElement("h3"); //Created the a h3 element to hold the title.
  theArticle.appendChild(theTitleTagName); // Appended the h3 element to the article Container.
  theTitleTagName.textContent = `${element.name}-${titleMaker(
    element.season,
    element.number
  )}`; // Set the the text content of the h3 element the object name property called the title maker maker function
  theTitleTagName.id = "title"; // Set the id of h3 element to 'title'.

  let theImageTagName = document.createElement("img"); // created an image element.
  theArticle.appendChild(theImageTagName); // Appended the image tag to the article parents.
  theImageTagName.id = "image"; //Set an id of 'image to it'

  var noImage = "";
  element.image == null ? noImage : (noImage = element.image.medium);
  theImageTagName.src = noImage;
  //Assigned the medium image object property to img element.
  let theParagraph = document.createElement("p"); // Created Paragraph element.

  theParagraph.textContent = element.summary.replace(/(<([^>]+)>)/gi, ""); //set the paragraph text content to the summary object property and remove the preset p tag using replace method
  theParagraph.id = "summary"; //Set the id of summary to the paragraph element.
  theArticle.appendChild(theParagraph); // Appended the paragraph to the article
}

/*5 fixes the title*/
/* This function will display the season number correctly takes season and number as a parameter*/
/**/
function titleMaker(season, number) {
  return `S0${season}E${number < 10 ? "0" + number : number}`; // interpolates the season 'S0' and checks if number is less than 10, concat '0' to number else returns a number.
}

/*This function will search the input and takes input as a parameter */

/*6 creates search*/
function search(input) {
  let searchResult = allEpisodes.filter((episode) => {
    // This function will filter all episode array of objects take one episode object as an element.
    return (
      episode.name.toLowerCase().includes(input.toLowerCase()) || //Compares object property of name that is lowercase is === to the input that the user enters if not converts it to the lowercase.
      episode.summary.toUpperCase().includes(input.toUpperCase()) //Compares object property of summary that is Uppercase is === to the input that the user enters if not converts it to the Uppercase.
    );
  });
  let theTitle = document.getElementById("numberOfMatchingTitle"); // Targeted the title in the setup function using get element by Id method.
  theTitle.textContent = `The total is: ${searchResult.length}/${allEpisodes.length}`; //The searchResult.length displays number of episodes matched to userInput

  makePageForEpisodes(searchResult); //Call our makePage for episode to loop though the search result this time.
}
/*7 creates dropdown list */
/*This function will Creates a dropdown-list*/
const drdShows = document.createElement("select");

function drdEventShows() {
  drdShows.addEventListener("change", (event) => {
    
    makePageForEpisodes(drdShows.value);
  });
}

function episodeDropList(episodes) {
     
  let ifElementExsicts = document.getElementById("episSelect");
     if(ifElementExsicts){
       ifElementExsicts.parentElement.removeChild(ifElementExsicts) 
     }
  let dropDownList = document.createElement("select"); //Creates a select element.
  let getTheFormId = document.getElementById("search-box"); //Gets a form element.
  getTheFormId.appendChild(dropDownList); //Appended the drop down list to the form.
   dropDownList.id='episSelect';
  let allOption = document.createElement("option"); //Created single option to go back to all episodes.
  allOption.textContent = "select All Episodes"; //Set the text content to 'select all episodes'
  dropDownList.appendChild(allOption); //Appended the all option to the drop-down list.
  console.log(episodes);
  episodes.forEach((episode) => {
    //loops go though all episodes.
    let option = document.createElement("option"); //as it loops creates option.
    option.textContent = `${episode.name}-${titleMaker(
      episode.number,
      episode.season
    )}`; //Assigned the text content to episodes name and calls the function title maker that takes episodes number and season number as parameter to fix
    dropDownList.appendChild(option); // appended the option to the drop list.
  });

  dropDownList.addEventListener("change", (event) => {
    // Event listener to display the result based on selected drop down list.
    let theListValue = event.target.value; // targets the list value options
    if (theListValue === allOption.textContent) {
      // if the list value be equal to select all episodes return all episode list
      rootElem.textContent = "";
      makePageForEpisodes(episodes); // calls the function that creates loops though all episodes and display it.
       
    } else {
      let searchResult = episodes.filter((episode) => {
             
        //console.log(searchResult)
        // filtered all episodes array to retrieve a episode.

        return theListValue.toLowerCase().includes(episode.name.toLowerCase()); //returns the list value  that includes episode name lower case
      });
       rootElem.textContent='';
      searchResult.forEach(OneEpisodes=>{
          setEpisodesHTML(OneEpisodes)
       })
      //makePageForEpisodes(searchResult); //calls the loop that displays the search filtered based on the selected option
    }
  });
}

function createDrdShows() {
  drdEventShows();
  drdShows.setAttribute("class", "selectShows"); //Creates a select element.
  let getTheFormId = document.getElementById("search-box"); //Gets a form element.
  getTheFormId.appendChild(drdShows); //Appended the drop down list to the form.
   
  let allOption = document.createElement("option"); //Created single option to go back to all episodes.
  allOption.setAttribute("class", "selectShow");
  allOption.textContent = "select All Shows"; //Set the text content to 'select all episodes'
  allOption.value= '0';
  drdShows.appendChild(allOption); //Appended the all option to the drop-down list.
  allShows.forEach((episode) => {
    //loops go though all episodes.
    let option = document.createElement("option"); //as it loops creates option.
    option.setAttribute("class", "showList");
    option.textContent = `${episode.name}`; //Assigned the text content to episodes name and calls the function title maker that takes episodes number and season number as parameter to fix
    /*-${titleMaker(
       episode.number,
      episode.season
    )}`;*/ option.value =
      episode.id;
    drdShows.appendChild(option); // appended the option to the drop list.
  });

  
  
  
  // drdShows.addEventListener("change", (event) => {
  //   // Event listener to display the result based on selected drop down list.
  //   let theListValue = event.target.value;
  //   //console.log(theListValue)
  //   // targets the list value options
  //   if (theListValue === allOption.textContent) {
  //     // if the list value be equal to select all episodes return all episode list
  //     makePageForEpisodes(allEpisodes); // calls the function that creates loops though all episodes and display it.
  //   } else {
  //     displayEpisodeList();
  //     const searchResult = allEpisodes.filter((episode) => {
  //       // filtered all episodes array to retrieve a episode.
  //       return theListValue.toLowerCase().includes(episode.name.toLowerCase()); //returns the list value  that includes episode name lower case
  //     });

  //     makePageForEpisodes(searchResult); //calls the loop that displays the search filtered based on the selected option
  //   }
  // });
}
//display episode level

function displayEpisodeList() {
  /* ToDo fetch all episodes for the selected show  */

  let theSelect = document.querySelectorAll(".selectShows"); // gets the selectShows class
  let theValue; // variable to store the episode title
  theSelect.forEach((element) => {
    // goes through the title
    theValue = element; // stores the title in the value
  });
  let theResult; // variable result
  let getTheValue = document.querySelectorAll(".placeHolder"); //get the div holder
  allShows.forEach((element) => {
    //  goes though shows element
    getTheValue.value = element.id; // the value of class to the id
  });
}

async function fetchEpisodesAsync(showId) {
  let response = await fetch(`https://api.tvmaze.com/shows/${showId}/episodes`); // fetches the episodes embeds the id

  let data = response.json();
   
  return data;
}

/*ToDo clear the shows*/
/*ToDo display the episodes*/
/* ToDo update the episode list*/

/*This is a footer function*/

/*8 creates footer*/
function createFooter() {
  let theFooter = document.createElement("footer"); // Creates a footer element
  document.body.appendChild(theFooter); // append the footer to the body element
  theFooter.textContent = "TVmaze is properly credited"; // set the text content of the footer to maze tv
}

window.onload = setup;

/* research */
/*
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  rootElem.textContent = `Got ${JSON.stringify(episodeList,null,4)} episode(s); 
  JSON.stringify can be used to display all the all the episods in a json list
  function tagStriped(){
    episodeList.forEach(summaryElement=>{
      let pTag = summaryElement.summary;
      console.log(removedPTag);
      return removedPTag;
      
    })
  }
  const stripPTagFromElement = summaryElement => {
    let pTag = summaryElement.summary;
    let removedPTag = pTag.replace(/(<([^>]+)>)/ig,'');
    return removedPTag;
  }
  
  function tagStriped() {
    episodeList.forEach(stripPTagFromElement)
  }
  
  */
