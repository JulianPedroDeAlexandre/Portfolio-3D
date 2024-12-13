
// Primeira Parte: Manipulação de Botões .botao-proximoanterior
// Este trecho do código controla botões que permitem trocar a página individualmente, 
// baseado em um identificador específico (data-page) atribuído a cada botão.

const botaotrocapagina = document.querySelectorAll(".botao-proximoanterior");

// Itera sobre cada botão na lista `botaotrocapagina`
botaotrocapagina.forEach((el, index) => {
    el.onclick = () => {
        // Pega o valor do atributo "data-page" do botão, que corresponde ao ID da página que ele deve controlar
        const trocapaginaid = el.getAttribute("data-page");

        // Seleciona o elemento da página com o ID correspondente
        const virapagina = document.getElementById(trocapaginaid);

        // Verifica se a página já está virada
        if (virapagina.classList.contains("vira")) {
            // Se estiver virada, remove a classe "vira" para desvirar a página
            virapagina.classList.remove("vira");

            // Ajusta o z-index depois de 500 ms para reordenar as páginas corretamente
            setTimeout(() => {
                virapagina.style.zIndex = 20 - index;
            }, 500);
        } else {
            // Se a página não estiver virada, adiciona a classe "vira" para virar a página
            virapagina.classList.add("vira");

            // Define um novo valor de z-index para garantir que a página virada fique sobre as outras
            setTimeout(() => {
                virapagina.style.zIndex = 20 + index;
            }, 500);
        }
    }
});

// Resumo desta parte
// Para cada botão .botao-proximoanterior:

// Ao clicar, ele verifica se a página correspondente está virada ou não, alternando entre virar e desvirar.
// z-index é ajustado após 500 ms para garantir que a página virada fique corretamente sobre ou sob outras páginas, 
// conforme a necessidade.


// Segunda Parte: Efeito em Sequência ao Clicar no Botão .botao.contato
// Este trecho controla o efeito de virar todas as páginas em sequência ao clicar no botão .botao.contato.

const paginas = document.querySelectorAll(".pagina-livro.pagina-direita");
const botcontatome = document.querySelector(".botao.contato");

// Adiciona um evento de clique ao botão `.botao.contato`
botcontatome.onclick = () => {
    // Para cada página direita (`.pagina-direita`), aplica um efeito de virar com um atraso em sequência
    paginas.forEach((pagina, index) => {
        // Adiciona um atraso para que cada página vire em sequência
        setTimeout(() => {
            // Adiciona a classe "vira" para virar a página
            pagina.classList.add("vira");

            // Ajusta o z-index após 500 ms para sobrepor as páginas corretamente
            setTimeout(() => {
                pagina.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100); // Atraso crescente para cada página
    });
}

// Resumo desta parte
// Ao clicar no botão .botao.contato, cada página direita (.pagina-direita) vira em sequência, com um intervalo entre elas.
// z-index é ajustado novamente após 500 ms para cada página, assegurando que a sobreposição 
// de páginas fique correta durante a animação.



// Definindo o número total de páginas e a página atual (começando do índice 0)
let paginastotal = paginas.length;
let numeropagina = 0;

// Função para atualizar o índice da página de forma reversa
function indicecontrario() {
    // Decrementa o índice da página atual
    numeropagina--;
    // Se o índice for menor que 0, define o índice para a última página (ciclo reverso)
    if (numeropagina < 0) {
        numeropagina = paginastotal - 1;
    }
}

// Seleciona o botão com a classe "voltar-perfil"
const btnperfil = document.querySelector(".voltar-perfil");

// Define a ação de "voltar" todas as páginas ao clicar no botão "voltar-perfil"
btnperfil.onclick = () => {
    // Para cada página, executa uma função com atraso
    paginas.forEach((_, index) => {
        // Define um atraso para cada página, criando o efeito de virar uma por uma
        setTimeout(() => {
            // Chama a função para atualizar o índice de forma reversa
            indicecontrario();
            // Remove a classe "vira" da página atual (desvira a página)
            paginas[numeropagina].classList.remove("vira");

            // Após um tempo, ajusta o z-index para reposicionar as páginas corretamente
            setTimeout(() => {
                // Atualiza o índice de forma reversa novamente
                indicecontrario();
                // Define o z-index da página para garantir que a ordem visual fique correta
                paginas[numeropagina].style.zIndex = 10 + index;
            }, 500); // Tempo para esperar o desvirar da página antes de ajustar o z-index
        }, (index + 1) * 200 + 100); // Cria um atraso crescente entre as páginas
    });
}

// Seleciona o elemento com as classes "capa" e "capa-direita" - representa a capa direita do livro
const capadireita = document.querySelector(".capa.capa-direita");
const capaesquerda = document.querySelector(".pagina-livro pagina-esquerda");

// Define um atraso de 3 segundos antes de iniciar a animação de abertura da capa direita
setTimeout(() => {
    // Adiciona a classe "turn" ao elemento "capadireita", o que provavelmente aplica a animação de "virar" a capa
    capadireita.classList.add("turn");
}, 3000); // 3000 milissegundos (ou 3 segundos) de atraso

setTimeout(() => {
    // Adiciona a classe "turn" ao elemento "capadireita", o que provavelmente aplica a animação de "virar" a capa
    capadireita.style.zIndex = -1;
}, 3700); // 3700 milissegundos (ou 3.7 segundos) de atraso

// abrindo animação pagina esuqerda ou perfil
setTimeout(() => {
    // Adiciona a classe "turn" ao elemento "capadireita", o que provavelmente aplica a animação de "virar" a capa
    capaesquerda.style.zIndex = 20;
}, 4100); // 4100 milissegundos (ou 4.1 segundos) de atraso 


paginas.forEach((_, index) => {
    // Define um atraso para cada página, criando o efeito de virar uma por uma
    setTimeout(() => {
        // Chama a função para atualizar o índice de forma reversa
        indicecontrario();
        // Remove a classe "vira" da página atual (desvira a página)
        paginas[numeropagina].classList.remove("vira");

        // Após um tempo, ajusta o z-index para reposicionar as páginas corretamente
        setTimeout(() => {
            // Atualiza o índice de forma reversa novamente
            indicecontrario();
            // Define o z-index da página para garantir que a ordem visual fique correta
            paginas[numeropagina].style.zIndex = 10 + index;
        }, 500); // Tempo para esperar o desvirar da página antes de ajustar o z-index
    }, (index + 1) * 200 + 3000); // Cria um atraso crescente entre as páginas
});