class PuzzleGame{

    constructor(somePieces){
    
    
        this.pieces=somePieces;
        this.piecesSelected=0
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
     //   console.log(rand)
    }
    checkIfPair(piece1, piece2) {
        this.piecesSelected++;
    
          this.isFinished();
      
      }
    
    

    isFinished(pieces) {
        piecesSelected++
       let i=0
        this.pieces.forEach(element => {
            
            if(element.name===i)
            {
                i++

            }

        });
        if(i===this.pieces.length){
            document.querySelector("#memory_board").innerHTML = "";
            let h1 = document.createElement("h1");
            h1.style.color = "pink";
            h1.innerHTML = "YOU WON!!!";
            document.querySelector(".game").appendChild(h1);
            console.log('a=>>>'+i)
        }

      }
    
    
    }