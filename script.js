const idade = {
    "recem-nascido": {min: 1, max:1},
    "3-a-6-meses": {min: 1, max:1},
    "6-a-12-meses": {min: 1, max:1},
    "1-a-5-anos": {min: 2, max: 4},
    "child": {conformeUso: true},
    "teenage": {conformeUso: true},
    "adultos": {conformeUso: true},
    "idosos":{min: 2, max: 4},
    "sick-people": {min: 2, max: 4},
    "pregnant": {min: 2, max: 4}, 
};

const uso = {
    "bebes": {min: 1, max:1},
    "ate-5-anos": {min: 2, max:4},
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

diluir.addEventListener("submit", function(event){
    event.preventDefault();
    const usoEscolhido = selectUso.value;
    const idadeEscolhida = selectIdade.value;
    const oleoEscolhido = selectOleo.value;
    const frascoEscolhido = selectFrasco.value;
});