class PuzzleGame{

    constructor(somePieces){
    
    
        this.pieces=somePieces;
        this.shuffles();


    }
    
    shuffles(){
   
        let len = this.pieces.length;
        while (len > 0) {
          len--;
          let temp = this.pieces[len];
          let rdmInd = Math.floor(Math.random() * len);
          this.pieces[len] = this.pieces[rdmInd];
          this.pieces[rdmInd] = temp;

          
        }



    }

    swap(num1,num2){


     let objeto1 =  this.pieces.findIndex((piece)=>{

       return piece.name===Number(num1)
      })

     let objeto2 =  this.pieces.findIndex((piece)=>piece.name===Number(num2))


    
    let aux=''
   aux =this.pieces[objeto1]

  this.pieces[objeto1 ]= this.pieces[objeto2]
  this.pieces[objeto2]=aux

    }
   
    

    isFinished(){ 
     let i =1
     let cont=0
       this.pieces.forEach(piece=>{

          if(piece.name===i){
           
           cont ++
       
           }
        i++
        })

        let jogo=''

        if(escolha==='opcao1'){
       
          jogo="url(./img/jogo2.png)"
        }else if(escolha==='opcao2'){

          jogo="url(./img/jogo1.jpg)"
        }

        

         if(cont ===this.pieces.length) {
          document.querySelector(".game").innerHTML = "";
          let div = document.createElement("div");
          div.style.backgroundImage=jogos;
          div.style.width='100%';
           div.style.height='100%';
          div.style.backgroundPosition='cover';
          div.style.backgroundPosition='center';
          div.style.backgroundPosition=jogo;
          let h2 = document.createElement("h2");
            h2.style.color = "red";
            h2.style.textAlign= "center";
            h2.style.fontSize= "40px";
            h2.style.marginTop= "30px"; 
           h2.innerHTML = "YOU WON :)";
           div.appendChild(h2);
           document.querySelector(".game").appendChild(div);
        }
   

      }
    
    
    }