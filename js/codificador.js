// iniciando lógicas para o projeto

// adicionando avento de click para o botão de codificar mensagem
document.querySelector('#btn-codificar').addEventListener('click', () => {

    var textoInserido = document.querySelector('#inserir-textarea');

    if (textoInserido.value != "") {
        var textoCodificado = textoInserido.value.replace(/e/g, "enter");
        textoCodificado = textoCodificado.replace(/i/g, "imes");
        textoCodificado = textoCodificado.replace(/a/g, "ai");
        textoCodificado = textoCodificado.replace(/o/g, "ober");
        textoCodificado = textoCodificado.replace(/u/g, "ufat");

        document.querySelector('.img-procurando').classList.add("invisivel");
        document.querySelector('#resposta-textarea').value = textoCodificado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    } else {
        alert("Não é possivel executar a função, pois o campo de texto está vazio.")
    }
});

// adicionando avento de click para o botão de descodificar mensagem
document.querySelector('#btn-descodificar').addEventListener('click', () => {

    var textoInserido = document.querySelector('#inserir-textarea');

    if (textoInserido.value != "") {
        var textoCodificado = textoInserido.value.replace(/enter/g, "e");
        textoCodificado = textoCodificado.replace(/imes/g, "i");
        textoCodificado = textoCodificado.replace(/ai/g, "a");
        textoCodificado = textoCodificado.replace(/ober/g, "o");
        textoCodificado = textoCodificado.replace(/ufat/g, "u");

        document.querySelector('.img-procurando').classList.add("invisivel");
        document.querySelector('#resposta-textarea').value = textoCodificado;
        document.querySelector('#btn-copiar').disabled = false;
        textoInserido.value = "";
    } else {
        alert("Não é possivel executar a função, pois o campo de texto está vazio.")
    }
});

// adicionando avento de click para o botão de copiar mensagem
document.querySelector('#btn-copiar').addEventListener('click', () => {

    document.querySelector("#resposta-textarea").disabled = false;
    document.querySelector("#resposta-textarea").select();
    document.execCommand("cut");
    document.querySelector('.img-procurando').classList.remove("invisivel");
    document.querySelector('#btn-copiar').disabled = true;
    document.querySelector("#resposta-textarea").disabled = true;
    alert("O texto foi copiado para a sua área de transferência!");
});