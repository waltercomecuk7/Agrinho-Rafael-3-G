const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em um evento de tecnologia rural onde foi apresentado um novo sistema de IA que ajuda a otimizar a colheita. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é incrível para melhorar a eficiência!",
                afirmacao: "Você está empolgado com a tecnologia que pode transformar a agricultura."
            },
            {
                texto: "Isso pode substituir muitos empregos no campo.",
                afirmacao: "Você se preocupa com o impacto da tecnologia nos empregos rurais."
            }
        ]
    },
    {
        enunciado: "Com a introdução da IA na agricultura, uma escola local começou a oferecer aulas sobre como usar essas novas ferramentas. O que você faz?",
        alternativas: [
            {
                texto: "Participa das aulas para aprender a usar a IA na agricultura.",
                afirmacao: "Você está interessado em como a tecnologia pode ajudar a modernizar o setor agrícola."
            },
            {
                texto: "Prefere buscar informações sobre o impacto da IA no setor agrícola por conta própria.",
                afirmacao: "Você deseja entender a tecnologia através da sua própria pesquisa e experiência."
            }
        ]
    },
    {
        enunciado: "Durante uma discussão sobre a tecnologia, é levantado o ponto de como a IA pode impactar a vida no campo e na cidade. Qual é a sua posição?",
        alternativas: [
            {
                texto: "A IA pode abrir novas oportunidades para a modernização e o crescimento econômico.",
                afirmacao: "Você acredita que a tecnologia pode ser benéfica tanto para áreas rurais quanto urbanas."
            },
            {
                texto: "Preocupa-se com a desigualdade que a tecnologia pode criar entre o campo e a cidade.",
                afirmacao: "Você está preocupado com a possibilidade de a tecnologia aumentar a desigualdade entre as áreas urbanas e rurais."
            }
        ]
    },
    {
        enunciado: "Você precisa criar um projeto visual que mostre como a IA pode melhorar a vida no campo. O que você faz?",
        alternativas: [
            {
                texto: "Cria um design utilizando uma ferramenta de design gráfico tradicional.",
                afirmacao: "Você opta por métodos tradicionais de design para criar uma representação visual do impacto da IA."
            },
            {
                texto: "Usa um gerador de imagens de IA para criar uma representação visual.",
                afirmacao: "Você utiliza tecnologia avançada para gerar uma imagem que ilustra o impacto da IA na vida rural."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de grupo sobre como a IA pode beneficiar diferentes setores. Um colega usou a IA para gerar o texto do projeto. Como você reage?",
        alternativas: [
            {
                texto: "Aceita o trabalho gerado pela IA sem revisões.",
                afirmacao: "Você começa a confiar excessivamente na IA para completar suas tarefas."
            },
            {
                texto: "Revisa o trabalho gerado pela IA e faz contribuições baseadas na sua própria perspectiva.",
                afirmacao: "Você percebe que a IA deve ser usada como uma ferramenta auxiliar, e não como a solução final."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
