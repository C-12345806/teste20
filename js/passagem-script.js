const voos = [

{
origem:"Vitória",
destino:"Rio de Janeiro",
data:"2026-08-12",
empresa:"Azul",
preco:399
},

{
origem:"São Paulo",
destino:"Salvador",
data:"2026-08-23",
empresa:"Gol",
preco:699
},

{
origem:"Rio de Janeiro",
destino:"Recife",
data:"2026-08-28",
empresa:"LATAM",
preco:799
}

];


function buscar(){

let origem = document.getElementById("origem").value;
let destino = document.getElementById("destino").value;
let data = document.getElementById("data").value;
let qtd = document.getElementById("passageiros").value;


if(!origem || !destino || !data || !qtd){

alert("Preencha todos os campos!");

return;

}


let resultado = document.getElementById("resultado");

resultado.innerHTML="";


let voo = voos.find(v =>

v.origem.toLowerCase()==origem.toLowerCase() &&
v.destino.toLowerCase()==destino.toLowerCase() &&
v.data==data

);


if(!voo){

resultado.innerHTML=
"<h2>Nenhuma passagem encontrada.</h2>";

return;

}


let total = voo.preco * qtd;


resultado.innerHTML=`

<div class="card">

<h2>${voo.origem} → ${voo.destino}</h2>

<p><b>Companhia:</b> ${voo.empresa}</p>

<p><b>Data:</b> ${data.split("-").reverse().join("/")}</p>

<p><b>Passageiros:</b> ${qtd}</p>

<p class="preco">
Total: R$ ${total}
</p>

<button>Comprar</button>

</div>

`;

}
const voos = [
{
origem:"Vitória",
destino:"Rio de Janeiro",
data:"2026-08-12",
empresa:"Azul",
preco:399
}

];
