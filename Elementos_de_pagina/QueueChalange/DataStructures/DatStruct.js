let array = []

function adicionar(){
    let nomeElement = document.getElementById("nome").value;
    let corElemet = document.getElementById("cor").value;
    let valores = {
        nome: nomeElement,
        cor:  corElemet
    };
    array.push(valores);
    arrayBuild();
    document.getElementById("nome").value = "";
    document.getElementById("cor").value = "";
}

function concluir (){
    array.pop();
    arrayBuild();
}

function arrayBuild (){
    document.getElementById('vet').innerHTML = '';
    for(let i = 0; i < array.length; i++) {
        let ballNum = document.createElement('div');
        let box = document.createElement('span');
        
        box.innerHTML = array[i].nome;       
        ballNum.style.background = array[i].cor;
        ballNum.classList.add("numberBal");
        ballNum.innerHTML = i+1;

        box.appendChild(ballNum);
        document.getElementById('vet').appendChild(box);
    }
}
