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



let image= []
document.querySelectorAll(".piece").forEach( piece => {
  piece.onclick = function() {


    const clicked= document.getElementsByClassName("clicked");


 image.push(piece)

 console.log(image)


    if(image.length===2){
      
      image[0].classList.innerHTML=image[1]
      image[1].classList.innerHTML=image[0]
   

    }
   // toggle(image[0], [image[1] )
    //toggle(image[1], [image[2] )

    
    //comsole.log('0000'+piece.childNodes.values)
    //comsole.log('111'+piece[1])
    memoryGame.pickedCards.push(card);




}


clicked.innerHTML = puzzleGame.piecesSelected;
})


});