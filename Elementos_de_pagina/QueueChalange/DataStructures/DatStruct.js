let array = []
let num = document.getElementById("num");

let pegandoFl = document.getElementById("fl");
let add = document.getElementById('add')
let rem = document.getElementById('remove')
let clear = document.getElementById('clear')


function adicionar(){
    array.push((num));
    
    document.getElementById("vet").textContent = array;

}

function concluir (){
    array.pop();
    document.getElementById("vet").textContent = array;

}
