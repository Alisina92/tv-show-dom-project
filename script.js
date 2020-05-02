//You can edit ALL of the code here

/*fetches the the data from the Maze Api*/
const rootElem = document.getElementById("root"); // parent of All my elements
let allEpisodes = getAllEpisodes();

//let displayResult;


/* setup function will call all the functions that makes the different part of the page */
function setup() {
  let displayResult = `The total is: 0 /${allEpisodes.length}`; // display the number of episodes.
    createHeader(displayResult); // Calls a function that creates the header section.
    dropDownList(); //Calls a drop list function.
    makePageForEpisodes(allEpisodes); //calls make page for episode function.
    createFooter(); // calls create footer function.
    
}

/*Creates header function that displays the header element */
function createHeader(displayResult) {
  const headerElement = document.getElementsByTagName("header"); // Selects the header element based on the Id that it's have
  const spanDisplayResult = document.createElement("span"); // Creates the span tag.
  spanDisplayResult.id = "numberOfMatchingTitle"; // Assigns an id to the span tag.
  spanDisplayResult.innerText = displayResult; // Assign the The total is: 0 /73 elements to span element.
  headerElement[0].appendChild(spanDisplayResult);// Appended the span to the header element. 

  let theForm = document.createElement("form");// Created the form element.
  theForm.id = "search-box";// Assigned it an id called search-box.
  headerElement[0].appendChild(theForm);//Appended a form to header element.

  let theInputText = document.createElement("input"); // Created the input Element.
  theInputText.id = "userInput";//Assigned an id to called userInput.
  theInputText.type = "text";//Set the Type to text.
  theInputText.placeholder = "Search a film...";//Assigned the placeHolder text to it.  
  theForm.appendChild(theInputText);//Appended the input to form.
  theInputText.addEventListener("input", (event) => {//eventListener that calls the search function.
    search(theInputText.value.trim());// Trimmed value of user input is passed to the search function.
   
  });
}

/* This function renders All The content of the page */  
function makePageForEpisodes(episodeList) {
  rootElem.textContent = "";// Set the of the root to blank as my the root content is the parent of my elements
  episodeList.forEach((e) => {// Loops through the episode list  
   setEpisodesHTML(e);// repeats set episode function to create the structure of the page.
    
  });
}
 /*This function will create the basic structure of one episode Title image and description that takes element as an argument*/

function setEpisodesHTML(element) { //Elements are the object inside of the array.
  let theContainer = document.createElement("div");//Creates an div element assign it assign it to the container element.
  theContainer.id = "placeHolder";// Assigned an id of 'placeHolder'.
  theContainer.setAttribute("class", "xl-col-4");// Assign the Class of "xl-col-4" from the grid CSS file.
  rootElem.appendChild(theContainer);// Appended the div element to the parent element of root.

  let theArticle = document.createElement("article"); // Creates an article element.
  theArticle.id = "article";//Assigned the id of article to the article.
  theArticle.setAttribute("class", "artContainer");// Assigned the class of artContainer to the Article element.
  theContainer.appendChild(theArticle);// Appended the Article to the div of our placeholder.

  let theTitleTagName = document.createElement("h3");//Created the a h3 element to hold the title.
  theArticle.appendChild(theTitleTagName);// Appended the h3 element to the article Container.
  theTitleTagName.textContent = `${element.name}-${titleMaker(
    element.season,
    element.number
  )}`; // Set the the text content of the h3 element the object name property called the title maker maker function
  theTitleTagName.id = "title"; // Set the id of h3 element to 'title'.
  let theImageTagName = document.createElement("img");// created an image element. 
  theArticle.appendChild(theImageTagName);// Appended the image tag to the article parents.
  theImageTagName.id = "image";//Set an id of 'image to it'
  theImageTagName.src = element.image.medium;//Assigned the medium image object property to img element. 
  let theParagraph = document.createElement("p");// Created Paragraph element.
  theParagraph.textContent = element.summary.replace(/(<([^>]+)>)/gi, "");//set the paragraph text content to the summary object property and remove the preset p tag using replace method 
  theParagraph.id = "summary";//Set the id of summary to the paragraph element.
  theArticle.appendChild(theParagraph);// Appended the paragraph to the article
}
 
/* This function will display the season number correctly takes season and number as a parameter*/

function titleMaker(season, number) { 
  return `S0${season}E${number < 10 ? "0" + number : number}`; // interpolates the season 'S0' and checks if number is less than 10, concat '0' to number else returns a number.
}

/*This function will search the input and takes input as a parameter */ 

function search(input) { 
   let searchResult = allEpisodes.filter((episode) => { // this function will filter all episode array of objects take one episode object as an element.
    return (
      episode.name.toLowerCase().includes(input.toLowerCase()) || 
      episode.summary.toUpperCase().includes(input.toUpperCase())
    );
  });
  let theTitle = document.getElementById("numberOfMatchingTitle");
  theTitle.textContent = `The total is: ${searchResult.length}/${allEpisodes.length}`;
  
  makePageForEpisodes(searchResult);
    
}

function dropDownList() {
  let dropDownList = document.createElement("select");
  let getTheFormId = document.getElementById("search-box");
  getTheFormId.appendChild(dropDownList);

  let allOption = document.createElement("option");
  allOption.textContent = "select All Episodes";
  dropDownList.appendChild(allOption);
  allEpisodes.forEach((episode) => {
    let option = document.createElement("option");
    option.textContent = `${episode.name}-${titleMaker(
      episode.number,
      episode.season
    )}`;
    dropDownList.appendChild(option);
  });


  dropDownList.addEventListener("change", (event) => {
    let theListValue = event.target.value;
    if (theListValue === allOption.textContent) {
      makePageForEpisodes(allEpisodes);
    } else {
      const searchResult = allEpisodes.filter((episode) => {
        return theListValue.toLowerCase().includes(episode.name.toLowerCase());
      });
      makePageForEpisodes(searchResult);
    }
  });
}

function createFooter() {
  let theFooter = document.createElement("footer");
  document.body.appendChild(theFooter);
  theFooter.textContent = "TVmaze is properly credited";
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
