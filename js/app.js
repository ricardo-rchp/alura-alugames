let Alugados = 1

function alterarStatus(jogo){
    let game = document.getElementById(`game-${jogo}`);
    let botao = game.getElementsByTagName('a')[0];
    let imagem = game.getElementsByTagName('div')[0];
    if(imagem.classList.contains('dashboard__item__img--rented')){
        if (confirm(`Você tem certeza que deseja devolver o jogo?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove('dashboard__item__button--return');
            alert('Confirmação de Jogo Devolvido');
            Alugados--;
        }
    }
    else{
        if (confirm(`Você tem certeza que deseja Alugar o jogo?`)){
            imagem.classList.add('dashboard__item__img--rented');        
            botao.textContent = 'Devolver';
            botao.classList.add('dashboard__item__button--return');
            alert('Confirmação de Jogo Alugado');
            Alugados++;
        }
    }
    console.log(`Quantidade de Jogos Alugados: ${Alugados}`);
}