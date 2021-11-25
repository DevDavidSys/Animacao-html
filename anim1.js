function anim1(){
    var jogador = document.getElementById('quadrado');
    var positionX = 0;
    var positionY = 0;
    var stateX = true;
    var stateY = true;
    
    setInterval(() => {moveFoward();}, 50);

    function moveFoward(){
        
        
        if(stateX == true){
            positionX+=4;
        }
        
        else if(stateX == false){
            positionX-=4;
        }

        if(stateY == true){
            positionY+= 10;
        }
        else if(stateY == false){
            positionY-=10;
        }

        if(positionY >= 490){
            stateY = false;
        }
        else if(positionY == 0){stateY = true;}
        if(positionX >= 490){
            stateX = false;
        }
        else if(positionX <= 0){
            stateX = true;
        }

        
        
        jogador.style.top = `${positionX}px`;
        jogador.style.left = `${positionY}px`;
        console.log(`x:${positionX} y:${positionY} stateX : ${stateX} state y:${stateY}`);
    }    
}

anim1();