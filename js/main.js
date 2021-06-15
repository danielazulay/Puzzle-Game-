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
  
  const pieces1 = [
    { name: 1, img: "1.jpg" },
    { name: 2, img: "2.jpg" },
    { name: 3, img: "3.jpg"},
    { name: 4, img: "4.jpg" },
    { name: 5, img: "5.jpg" },
    { name: 6, img:"6.jpg" },
    { name: 7, img: "7.jpg" },
    { name: 8, img: "8.jpg"},
    { name: 9, img: "9.jpg"},
    { name: 10, img: "10.jpg" },
    { name: 11, img: "11.jpg" },
    { name:12, img: "12.jpg" },
    { name: 13, img: "13.jpg" },
    { name: 14, img: "14.jpg" },
    { name: 15, img: "15.jpg" },
    
   


  ];

  

  let board=''

  board+=`<div class="gameOpional">`
  board+=`<button type="button" ><p id="pieces">Facil</p></button>`
  board+=`<button type="button"> <p id="pieces1">Dificil</p></button>`
  board+=`</div>`

 
  document.querySelector(".game").innerHTML=board;
  
  let li = document.querySelector(".gameOpional")
  let escolha=''

  li.addEventListener("click", function(event) {
 escolha = event.target.id;
    


let aux=[]

if(escolha==='pieces'){
 

  aux = [...pieces]
  document.querySelector(".gameOpional").innerHTML=''

 }else{
  aux = [...pieces1] 
  document.querySelector(".gameOpional").innerHTML=''

  
}
const puzzleGame = new PuzzleGame(aux);


let html=''
puzzleGame.pieces.forEach(element => {
  html+=`<div class="piece" >`;
  //  html+=`<div class="immagem" id=${element.name} style="background: url(img/${element.img}) no-repeat"></div>`;
  if(escolha==='pieces'){
  html+=`<div class="immagem"id="${element.name}"  ><img id="${element.name}" src="../img/${element.img}" width="180" height="160"></div>`;
  }else{
    html+=`<div class="immagem" id="${element.name}"  ><img id="${element.name}" src="../img/${element.img}" width="130" height="175"></div>`
  }
    html+=`</div>`;

})




document.querySelector(".game").innerHTML=html;



let cont=0;
let image= []


document.querySelectorAll(".piece").forEach( piece => {
  piece.onclick = function() {
    image.push(piece)
  // game.push(piece)
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
      console.log(image[0])
      
      

      pic2=image[1].innerHTML
      let name1 = image[1].firstChild.id;
      console.log(image[1])
      


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


}
);