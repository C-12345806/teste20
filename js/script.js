
const botao = document.getElementById('botao');
botao.addEventListener('click', function() {
    botao.textContent = 'Enviado com Sucesso';
});


function enviarMensagem() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
}
if (nome === "" || email === "" || telefone === "" || mensagem === "") {
    alert("Prencher todos os campos.");
} else {
    alert("RumoCerto agradece sua mensagem.");
    document.getElementById("formContato").reset();

}