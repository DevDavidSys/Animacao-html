
//window.onload(onload());

function onload() {

    anim2();
    
}


function anim2() {
    let tela = document.getElementById('tela');
    let heigth = getRandomIntInclusive(0,487);
    let width = getRandomIntInclusive(0,487);
    tela.innerHTML =`<div id="quadrado" style="top: ${width}px; right: ${heigth}px;" ></div>`;
    let bolinha = document.getElementById('quadrado');
    
    bolinha.style.backgroundColor = 'rgb(0,0,0)';
    let animation = setInterval(frame,1);
    let color = 255;
    function frame(){
        if(color > 0){
            color--;
            bolinha.style.backgroundColor = `rgb(${color},${color},${color})`;
        }
        else{
            clearInterval(animation);
        }
        
    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function log(item) {
    console.log(item)
}