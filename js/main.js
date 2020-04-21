function clicou(){
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");
    //window.location.href = "https://web.digitalinnovation.one/home"
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("pagina carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}


/* function soma (n1, n2){
    return n1 + n2;
} */

/* function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


var validar;
var idade = prompt ("Qual a sua idade?")
function validaIdade(idade){

    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
}

console.log(validaIdade(idade)); */







// var nome = "Jorge Reis";
// var idade = 28;
// var idade2 = 10;
// frase="Brasil é bom para viver"
// var lista = ["maçã", "pêra", "laranja"]

// var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

// //var fruta = {nome:"maçã", cor:"vermelha"}

// //lista.pop("laranja");
// //lista.push("uva");
// //console.log(lista);
// //console.log(lista.length);
// //console.log(lista.reverse());
// console.log(lista);
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));
// // alert("Bem vindo "+ nome);
// // alert("Voce tem "+ idade + " anos");
// // alert(idade + idade2);
// // console.log(nome);
// // console.log(idade);
// console.log(frase.replace("Brasil", "Europa"));

// //console.log(fruta);

// console.log(frutas[1].nome);

/* var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}; */

/* var count = 0;
while(count < 5){
    console.log(count);
    count++;
} */

/* var count;
for(count = 0; count <= 5; count++){
    alert(count);
} */

/* var d = new Date();
alert(d.getTime()); */


