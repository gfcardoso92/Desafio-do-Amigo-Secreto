let amigos = [];

let sorteio = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo")
    let nome = input.value;

     if (nome === '' || !isNaN(nome)) {
        alert('Por favor, insira um nome válido.');
        return;
     } else {
        document.getElementById('amigo').value = ''
     }

amigos.push(nome);
    atualizarLista();
    input.value = '';
    input.focus();

}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo + (index < amigos.length - 1 ? ', ' : '');
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    if (sorteio.length === amigos.length) {
        alert('Todos os amigos já foram sorteados.');
        return;
    }

    let indiceSorteio;
    let amigoSorteado;

    do {
        indiceSorteio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceSorteio];
    } while (sorteio.includes(amigoSorteado));

    sorteio.push(amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}