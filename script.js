var url='https://api.giphy.com/v1/gifs/search?api_key=k4XJuoyv7KfPioFhmCb6QyOZ0Fyq9wZA&q=';
async function addCard(){
 let word=document.getElementById('giphy').value;
 console.log(word);
  try{
    let res=await fetch(url+word);
    let gif_res=await res.json();
    console.log(gif_res);
    for(let i in gif_res.data){
      console.log(gif_res.data[i].embed_url);
      var card=document.createElement('div');
      card.classList.add('card');
      let image=document.createElement('object');
      image.classList.add('card-img-top');
      image.data=gif_res.data[i].embed_url;
      card.appendChild(image);
      document.getElementById('res').appendChild(card);
  }
}catch(err){
    console.log("Err",err);
}
}




/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/
