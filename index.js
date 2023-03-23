//Criando os cards
const card = {
    texto: "Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções.",
    autor: "Pequena Sereia"
}

var q1 = Object.create(card);
q1.texto = "Seja como for o que penses, creio que é melhor dizê-lo com boas palavras.";
q1.autor = "William Shakespeare";

var q2 = Object.create(card);
q2.texto = "Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções.";
q2.autor = "Pequena Sereia";

var q3 = Object.create(card);
q3.texto = "Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento.";
q3.autor = "Clarice Lispector";

var q4 = Object.create(card);
q4.texto = "Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.";
q4.autor = "Sêneca";

var q5 = Object.create(card);
q5.texto = "Seja feliz do jeito que você é, não mude sua rotina pelo o que os outros exigem de você, simplesmente viva de acordo com o seu modo de viver.";
q5.autor = "Bob Marley";

var q6 = Object.create(card);
q6.texto = "Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido.";
q6.autor = "Fernando Pessoa";

var q7 = Object.create(card);
q7.texto = "Eu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos.";
q7.autor = "Maquiavel";

var q8 = Object.create(card);
q8.texto = "A vida é maravilhosa se não se tem medo dela.";
q8.autor = "Charles Chaplin";

var q9 = Object.create(card);
q9.texto = "O que importa afinal, viver ou saber que se está vivendo?";
q9.autor = "Clarice Lispector";

var q10 = Object.create(card);
q10.texto = "Você está vivo. Esse é o seu espetáculo. Só quem se mostra se encontra. Por mais que se perca no caminho.";
q10.autor = "Cazuza";

const quotes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

//inserindo os cards no HTML

const cardBtn = document.getElementById('card-btn');
const cardList = document.querySelector('.card-list');

var i = 0;
cardBtn.addEventListener('click', () => {
    console.log(i);
    
    
    if ( i < (quotes.length)){ 
        cardList.firstElementChild.innerHTML = quotes[i].texto;
        cardList.lastElementChild.innerHTML = quotes[i].autor;
        i++;}
    else {
        cardList.firstElementChild.innerHTML = "Sem mais citações no momento.";
        cardList.lastElementChild.innerHTML = ":(";
        i = 0;
    }

    
});

