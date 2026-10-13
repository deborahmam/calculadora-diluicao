const idade = {
    "recem-nascido": {min: 1, max:1},
    "3-a-6-meses": {min: 1, max:1},
    "6-a-12-meses": {min: 1, max:1},
    "1-a-5-anos": {min: 2, max: 4},
    "child": {min: 2, max: 4},
    "teenage": {conformeUso: true},
    "adultos": {conformeUso: true},
    "idosos":{min: 2, max: 4},
    "sick-people": {min: 2, max: 4},
    "pregnant": {min: 2, max: 4}, 
};

const uso = {
    "pele-sensivel": {min: 2, max:4},
    "diario": {min: 5, max: 10},
    "pontual": {min: 10, max:20},
    "cosmeticos": {min: 1, max:2},
    "relaxamento": {min: 2, max:5},
    "dores": {min: 10, max:20},
    "queimadura": {aplicarPuro: true},
    "insetos": {aplicarPuro: true},
};

const diluir = document.querySelector ("form");
const selectUso = document.querySelector("#uso");
const selectIdade = document.querySelector("#idade");
const selectOleo = document.querySelector("#oleo");
const selectFrasco = document.querySelector("#frasco");
const diluicao = document.querySelector("#resultado");

diluir.addEventListener("submit", function(event){
    event.preventDefault();
    const usoEscolhido = selectUso.value;
    const idadeEscolhida = selectIdade.value;
    const oleoEscolhido = selectOleo.value;
    const frascoEscolhido = Number (selectFrasco.value);

    const dadosIdade = idade[idadeEscolhida];
    const dadosUso = uso[usoEscolhido];

   
    let faixa;

    if (dadosIdade.conformeUso) {
         
        if (dadosUso.aplicarPuro) {
            diluicao.textContent = "Aplicar o óleo essencial puro no local."
            return;
        } else {
            faixa = dadosUso;
        }
    
    } else {
        faixa = dadosIdade;
    }

   
    const gotasMin = Math.ceil(frascoEscolhido * 20 * faixa.min / 100);
    const gotasMax = Math.ceil(frascoEscolhido * 20 * faixa.max / 100);



   diluicao.textContent = "Colocar entre " + gotasMin + " e " + gotasMax + " gotas do óleo essencial. Completar o frasco com óleo de coco fracionado.";
    if (gotasMin === gotasMax) {
        diluicao.textContent = "Colocar " + gotasMin + " gotas do óleo essencial. Completar o frasco com óleo de coco fracionado.";
    }
});