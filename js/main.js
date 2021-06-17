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
  let escolha=''
function criarOpcoes(){
  document.querySelector(".foot").innerHTML='';
  let clicks = document.getElementById('clicked')
  clicks.innerHTML= 0;

  let board=''

  board+=`<div class="gameOpional">`
  board+=`<button type="button" id="opcao1">Easy</button>`
  board+=`<button type="button" id="opcao2">Hard</button>`
  board+=`</div>`

 
  document.querySelector(".game").innerHTML=board;
  let buttons = document.querySelector(".gameOpional")
  let opt1 = buttons .querySelector("#opcao1");

  let opt2 = buttons .querySelector("#opcao2");


  let aux=[]


  opt1.addEventListener("click", function(event) {
 escolha = event.target.id;
 aux = [...pieces];
 document.querySelector(".gameOpional").innerHTML='';
 op=' width="200" height="170"';
 const puzzleGame = new PuzzleGame(aux);
 criarCartas(op,puzzleGame)
  })


  opt2.addEventListener("click", function(event) {
    escolha = event.target.id;
      aux = [...pieces1] ;
      document.querySelector(".gameOpional").innerHTML=''
       op =' width="130" height="170"';
       const puzzleGame = new PuzzleGame(aux);
       criarCartas(op,puzzleGame)
     });

    }

    criarOpcoes()
 function criarCartas(op,puzzleGame){
  let html='';
puzzleGame.pieces.forEach(element => { 



     html+=`<div class="piece" >`;
     html+=`<div class="immagem"id="${element.name}"  ><img id="${element.name}" src="./img/${element.img}" ${op}></div>`;
     html+=`</div>`;
});


document.querySelector(".game").innerHTML=html;
let cont=0;
let image= []

let botao=''
botao+=`<div class="botaoLevel">`
botao+=`<button  id="back" type="button" onClick="  criarOpcoes() ">Voltar</button>`
botao+=`</div>`


document.querySelector(".foot").innerHTML=botao;

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


      puzzleGame.isFinished(escolha)
    //  console.log(game)

  }
  

}



});
}









