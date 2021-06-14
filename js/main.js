const pieces = [
    { name: 1, img: "piece1.jpg" },
    { name: 2, img: "piece2.jpg" },
    { name: 3, img: "piece3.jpg"},
    { name: 4, img: "piece4.jpg" },
    { name: 5, img: "piece5.jpg" },
    { name: 6, img:"piece6.jpg" },
    { name: 7, img: "piece7.jpg" },
    { name: 8, img: "piece8.jpg"},
    { name: 9, img: "piece9.jpg" },

  ];

  const puzzleGame = new PuzzleGame(pieces);



document.addEventListener("DOMContentLoaded", function(event){
let html=''
puzzleGame.pieces.forEach(element => {
  html+=`<div class="piece" >`;
    html+=`<div class="immagem" id=${element.name} style="background: url(img/${element.img}) no-repeat"></div>`;
    html+=`</div>`;
    
});

document.querySelector(".game").innerHTML=html;

function toggle(element, classes) {
  classes.forEach(className => element.classList.toggle(className));
  
}

let cont=0;
let image= []




document.querySelectorAll(".piece").forEach( piece => {
  piece.onclick = function() {
    image.push(piece)
  //  game.push(piece)
  // let name = piece.getAttribute('number-piece');
 //  console.log(pieces.indexeOf(name))
//console.log(name )
//contagem de clicks


cont=cont+1
let clicks = document.getElementById('clicked')



 if(image.length===2){
  clicks.innerHTML= cont/2;
   let pic1=''
   let pic2=''


      pic1=image[0].innerHTML
      let name0 = image[0].firstChild.id;
      console.log(name0)
      
      

      pic2=image[1].innerHTML
      let name1 = image[1].firstChild.id;
      console.log(name1)



      image[0].innerHTML=pic2
      image[1].innerHTML=pic1

      puzzleGame.swap(name0,name1)
  

      image= []  


      puzzleGame.isFinished()
    //  console.log(game)

  }
  
  

}


clicked.innerHTML = puzzleGame.piecesSelected;
})


});