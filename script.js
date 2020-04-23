//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  
}
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  episodeList.forEach(element => {
    let theContainer = document.createElement('div');
    theContainer.id = 'placeHolder';
    theContainer.setAttribute('class','xl-col-4');
     
    rootElem.appendChild(theContainer);
    let theTitleTagName = document.createElement('h2');
    theContainer.appendChild(theTitleTagName)
    theTitleTagName.textContent = `${element.name}-S0${element.season}E${element.number < 10 ? '0' + element.number : element.number}`;
    theTitleTagName.id = 'title';
    let theFigure = document.createElement('figure');
     theContainer.appendChild(theFigure);
    let theImageTagName = document.createElement('img');
    theFigure.appendChild(theImageTagName);
    theImageTagName.id = 'image';
    theImageTagName.src = element.image.medium;
    let theFigCaption = document.createElement('figcaption');
    theFigCaption.textContent = element.summary.replace(/(<([^>]+)>)/ig,'');
    theFigCaption.id ='summary';
    theFigure.appendChild(theFigCaption);
  });  
  let theFooter = document.createElement('footer');
   document.body.appendChild(theFooter);
  theFooter.textContent = 'TVmaze is properly credited'
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
  
  