// Seleciona o botão de inscrição
const botaoInscrever = document.querySelector('.btn-inscrever');

// Adiciona o evento de clique
botaoInscrever.addEventListener('click', function() {
    // Verifica se já está inscrito comparando o texto
    if (botaoInscrever.innerText === 'INSCREVER-SE') {
        // Se não estiver inscrito, muda para inscrito
        botaoInscrever.innerText = '✓ INSCRITO';
        botaoInscrever.style.backgroundColor = '#606060'; // Cor cinza de inscrito
    } else {
        // Se já estiver inscrito, cancela a inscrição (volta ao original)
        botaoInscrever.innerText = 'INSCREVER-SE';
        botaoInscrever.style.backgroundColor = '#cc0000'; // Vermelho original
    }
});

console.log("script.js carregado com interações dos botões.");