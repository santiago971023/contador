const aumen = document.getElementById("aumentar");
const restar = document.getElementById("restar");
const reiniciar = document.getElementById("reiniciar");


var numero1 = 0;

var elementoSpan = document.createElement("span");
elementoSpan.setAttribute("id","display");

document.getElementById("display").innerHTML=numero1;


aumen.addEventListener("click", () => {
    numero1+=1;
    document.getElementById("display").innerHTML=numero1;
})

restar.addEventListener("click", () => {
    numero1-=1;
    document.getElementById("display").innerHTML=numero1;
})

reiniciar.addEventListener("click", () => {
    numero1 = 0;
    document.getElementById("display").innerHTML=numero1;
})



