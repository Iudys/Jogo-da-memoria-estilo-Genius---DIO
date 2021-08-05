let order = [];
let clickedOrder = [];
let score = 0;

// 0 =  verde
//1 = vermelhor
//2= amarelo
// 3 azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const amarelo = document.querySelector(".amarelo");

// cria ordem aleatoria da cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); // gerar um valor inteiro até 4
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};
// Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });
};

// checa se os botoes clicados são os mesmos da ordem gerada no jogo
let check0rder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`);
        nextLevel();
    }
};
// funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColorElement(color).classList.add("selected");

    setTimeout(() => {
        elementColorElement(color).classList.remove("selected");
    });
};
