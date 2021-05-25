var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputTempo = document.getElementById("tempo");
var resultado = document.getElementsByTagName("div")[1];

function calc(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let tempo = inputTempo.value;
    let resultCarne = carneExc(tempo) * adultos + (carneExc(tempo)*criancas/2);
    let resultCerv = cervExc(tempo) * adultos;
    let resultBeb = bebExc(tempo) * adultos + (bebExc(tempo)*criancas/2)
    texts(resultCarne,resultCerv,resultBeb);
}
function carneExc(tempo){
    if (tempo >= 6) {
        return 600;
    } else
        return 400;
}
function cervExc(tempo){
    if (tempo >= 6) {
        return 2000;
    } else
        return 1200;
}
function bebExc(tempo){
    if (tempo >= 6){
        return 1500;
    } else
        return 1000;
}
function texts(resultCarne,resultCerv,resultBeb){
    let p1 = document.createElement("p");
    let ptext1 = document.createTextNode((resultCarne/1000) + "kg de carne");
    p1.appendChild(ptext1);
    let p2 = document.createElement("p");
    let ptext2 = document.createTextNode(Math.ceil(resultCerv/355)+ " latas de cerveja");
    p1.appendChild(ptext2);
    let p3 = document.createElement("p");
    let ptext3 = document.createTextNode((resultBeb/2000) + " Pet's de refrigerante");
    p1.appendChild(ptext3);
    resultado.insertAdjacentElement('afterbegin',p1,p2,p3);
}
