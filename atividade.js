var listaDePecas = ["Amortecerdor","Motor","Correia dentada","Filtro de ar","pneu 14",];

if(listaDePecas.length > 5){
    console.log("Não é possivel cadastrar por execesso de peças");
}else{
    console.log("Limite permitido");
}

let peso = 99;

if(peso >= 100){
    console.log("Peso permitido")
}else{
    console.log("O peso está fora do normal")
}

let peca = "Farol";
if(peca.length < 3){
    console.log("O nome da peça é muito pequeno")
}else{
    console.log("O nome da peça é valido")
}