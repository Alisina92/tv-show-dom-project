<div id ='placeHolder'>
 <article id = article>
  <h3 id ='title'>
  <p id = 'summary'>

   /*
      let input = document.getElementById('userInput');
       let filterTitle = input.value.toUpperCase(); 
      let theFilmTitle = document.getElementsByTagName('h3');
       for(let i = 0; i<theFilmTitle.length ;i++){
           let textValue = theFilmTitle[i].textContent|| theFilmTitle[i].innerText;
           if(textValue.toUpperCase().indexOf(filterTitle)>-1){
             theFilmTitle[i].style.display = 'block';
              }else{
             theFilmTitle[i].style.display = 'none';
              }
            }
      
      let filterSummary = input.value.toUpperCase();
      let theSummary = document.getElementsByTagName('p');
      for (let j = 0; j < theFilmTitle.length; j++) {
        let textValue = theSummary[j].textContent || theSummary[j].innerText;
        if (textValue.toUpperCase().indexOf(filterSummary) > -1) {
          theSummary[j].style.display = 'block';
        } else {
          theSummary[j].style.display = 'none';
        }
        }
        */

         let matchedEpisodes = 0;
        if (theFilmTitle.style.display === "block" &&
        theSummary.style.display === "block"){
        return matchedEpisodes++;
        } else {
        return matchedEpisodes;
        }

        console.log("set episode  " + element);
  let theContainer = document.createElement("div");
  theContainer.id = "placeHolder";
  theContainer.setAttribute("class", "xl-col-4");
  rootElem.appendChild(theContainer);

  let theArticle = document.createElement("article");
  theArticle.id = "article";
  theArticle.setAttribute("class", "artContainer");
  theContainer.appendChild(theArticle);

  let theTitleTagName = document.createElement("h3");
  theArticle.appendChild(theTitleTagName);
  theTitleTagName.textContent = `${element.name}-${titleMaker(
    element.season,
    element.number
  )}`;
  theTitleTagName.id = "title";
   //console.log('cv  '+element); 
  let theImageTagName = document.createElement("img");
  theArticle.appendChild(theImageTagName);
  theImageTagName.id = "image";
  theImageTagName.src = element.image;
  //console.log(element.image.medium)
  let theParagraph = document.createElement("p");
  theParagraph.textContent = element.summary.replace(/(<([^>]+)>)/gi, "");
  theParagraph.id = "summary";
  theArticle.appendChild(theParagraph);

  /*///fetch("https://api.tvmaze.com/shows")
  ///.then(response => response.json())
  //.then(episodes => {
    //allEpisodes = episodes;
    let displayResult = `The total is: 0 /${allEpisodes.length}`; // display the number of episodes.
    createHeader(displayResult); // Calls a function that creates the header section.
    dropDownList(); //Calls a drop list function.
    makePageForEpisodes(allEpisodes); //calls make page for episode function.
    console.log(allEpisodes)
    createFooter(); // calls create footer function.
    
    //console.log('test 44 ' + allEpisodes)
  //}).catch(err => console.log(err));*/



  level 400

  const searchResult = allEpisodes.filter((episode) => {
        // filtered all episodes array to retrieve a episode.
             console.log(episode)
        return theListValue.toLowerCase().includes(episode.name.toLowerCase()); //returns the list value  that includes episode name lower case

        let theOptionValue = event.target.value;
               console.log(theOptionValue)
          console.log(theOptionValue.toLowerCase());
          console.log(element.url.toLowerCase());

          console.log(
            element.url.toLowerCase().includes(theOptionValue.toLowerCase())
          );
          if (
            theOptionValue.toLowerCase().includes(element.url.toLowerCase())
          ) {
          }




              function fetchEpisodes(showId){
      fetch(`https://api.tvmaze.com/shows/${showId}/episodes`)// fetches the episodes embeds the id
            .then((response) =>{ 
               return response.json;
            });
    }

    // fetch(`https://api.tvmaze.com/shows/${element.id}/episodes`)// fetches the episodes embeds the id
//   .then((response) => response.json())// converts the data into json
//   //.then((theData) => {// gets the data
//     ; // assigns the data to the result
//     //console.log(theResult)

//     //getTheValue.addEventListener("change", (event) => {// if the value  change
//       //makePageForEpisodes(theData); // makes episode page page with result
//     });
//   })
//   .catch((err) => console.log(err));// gets the error if any

// })

//}