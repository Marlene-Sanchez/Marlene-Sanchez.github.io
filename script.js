const tigre = document.getElementById("tigre");
const oso = document.getElementById("oso");
const pez = document.getElementById("pez");
const perro = document.getElementById("perro");
 
let Num1 = document.getElementById("Input1").value;
let resultado = document.getElementById("result");  

function Tigre() {
    Num1 = document.getElementById("Input1").value; 
    let tig = (parseFloat(Num1)*26)/81;
    tig=Math.round(tig*10)/10;

    resultado.textContent = " Tu edad en años de tigre es de " + tig+ " años.";
}
 
function Oso() {
    Num1 = document.getElementById("Input1").value;   
    let Oso = parseFloat(Num1)*25/81;
    Oso=Math.round(Oso*10)/10;

    resultado.textContent = " Tu edad en años de oso es de " + Oso+ " años.";
}
function Pez() {
    Num1 = document.getElementById("Input1").value;
    let Pez = parseFloat(Num1)*5/81;
    Pez=Math.round(Pez*10.0)/10.0;

    resultado.textContent = " Tu edad en años de pez es de " + Pez+ " años.";
}
function Perro() {
    Num1 = document.getElementById("Input1").value;  
    let Perro = parseFloat(Num1)*13/81;
    Perro=Math.round(Perro*10)/10;

    resultado.textContent = " Tu edad en años de perro es de " + Perro + " años.";
}
tigre.addEventListener("click", Tigre); 
oso.addEventListener("click", Oso); 
pez.addEventListener("click",Pez); 
perro.addEventListener("click", Perro); 