//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent= `The total ${matchedEpisodesList} /${episodeList.length}`;
  let theForm = document.createElement('form');
   theForm.id='search-box';
   rootElem.appendChild(theForm);
   let theInput=document.createElement('input');
   theInput.id ='userInput';
   theInput.type='text'; 
   theInput.onkeyup = function(){search()};
   
   theInput.placeholder='Search a film...';
   theForm.appendChild(theInput);
   
   
   episodeList.forEach(element => {
     let theContainer = document.createElement('div');
     theContainer.id = 'placeHolder';
     theContainer.setAttribute('class','xl-col-4');
     rootElem.appendChild(theContainer);
     let theArticle = document.createElement('article');
     theArticle.id='article'; 
     theArticle.setAttribute('class','artContainer')
     theContainer.appendChild(theArticle);
     let theTitleTagName = document.createElement('h3');
     theArticle.appendChild(theTitleTagName);
     theTitleTagName.textContent = `${element.name}-S0${element.season}E${element.number < 10 ? '0' + element.number : element.number}`;
     theTitleTagName.id = 'title';
     let theImageTagName = document.createElement('img');
     theArticle.appendChild(theImageTagName);
     theImageTagName.id = 'image';
     theImageTagName.src = element.image.medium;
     let theParagraph = document.createElement('p');
     theParagraph.textContent = element.summary.replace(/(<([^>]+)>)/ig,'');
     theParagraph.id ='summary';
     theArticle.appendChild(theParagraph);
    });  
    
    function search(){
      
      
      let input = document.getElementById('userInput');
      let filterTitle = input.value.toUpperCase();
      let theFilmTitle = document.getElementsByTagName('h3');
      for (let i = 0; i < theFilmTitle.length; i++) {
        let textValue = theFilmTitle[i].textContent || theFilmTitle[i].innerText;
        if (textValue.toUpperCase().indexOf(filterTitle) > -1) {
          theFilmTitle[i].style.display = 'block';
        } else {
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
    }
            function matchedEpisodesList(){
               let matchedEpisodes= 0;
              if (theFilmTitle.style.display === 'block' && theSummary.style.display === 'block' ){
                  return matchedEpisodes++;
                }else{
                  return matchedEpisodes;
                }
              }
    
    
    
    
    
    let theFooter = document.createElement('footer');
    document.body.appendChild(theFooter);
    theFooter.textContent = 'TVmaze is properly credited';
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
  
  