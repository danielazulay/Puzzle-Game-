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
    html+=`<div class="piece" number-piece="${element.name}">`;
    html+=`<div class="immagem" style="background: url(img/${element.img}) no-repeat"></div>`;
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


    const clicked= document.getElementsByClassName("clicked");
cont++

 image.push(piece)



 if(image.length===2){
console.log(image.length)
   let pic1=''
   let pic2=''

      pic1=image[0].innerHTML
      pic2=image[1].innerHTML
      console.log(pic1)
      console.log(pic2)

      image[0].innerHTML=pic2
      image[1].innerHTML=pic1


      console.log( image[1])
      console.log( image[0])

      image= []  
  }
  
  

}


clicked.innerHTML = puzzleGame.piecesSelected;
})


});