(function(window){

  let info = document.getElementById('container');
  
  function reqListener(){
    let content = JSON.parse(this.responseText);
    // console.log(content.data.children);    

    for(var i = 0; i < content.data.children.length; i++){

      //create article title
      let articleCard = document.createElement('div');

      let articleTitle = document.createElement('h2');
      articleTitle.innerHTML = content.data.children[i].data.title;   
      console.log(content.data.children[i].data.title);

      //create author name
      let articleAuthor = document.createElement('h2');
      articleAuthor.innerHTML = content.data.children[i].data.author;
      
      //appending content to articleCard
      articleCard.appendChild(articleTitle);
      articleCard.appendChild(articleAuthor);
      info.appendChild(articleCard);

    }



    
  }

  const oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', "https://www.reddit.com/r/aww.json");
  oReq.send();

}(window));