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
        console.log(piece.name,i)
          if(piece.name===i){
           
           cont ++
          
           }
        i++
        })
         if(cont ===this.pieces.length) {
            console.log('you win')
        }
        //console.log(this.pieces)
        //console.log(cont)

      }
    
    
    }