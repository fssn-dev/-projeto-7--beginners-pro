"use strict";

const BODY = document.querySelector('body')
const NOME = document.getElementById('nome')
const LOCAL = document.getElementById('local')
const COMBATE = document.getElementById('combate')
const ANTAGONISTA = document.getElementById('antagonista')
const PROBLEMA = document.getElementById('problema')
const CAUSA = document.getElementById('causa')
const BUTTON = document.querySelector('button')
const MENU = document.getElementById('menu')
const WRAPPER = document.getElementById('wrapper')
const TEXTAREA = document.getElementById('textarea')

//declaração de índice para função do efeito typewriter
let i = 0

//instruções a serem executadas no click do botão
BUTTON.addEventListener('click', () => {

    //esconde a div dos seletores
    MENU.style.display = "none"

    //remove a imagem de fundo inicial e ajusta a cor de fundo para diminuir
    // a agressividade das transições de imagem
    BODY.style.backgroundImage = 'none'
    BODY.style.backgroundColor = "#777"

    //exibe a div que exibe a história
    WRAPPER.style.display = "flex"

    //função que gerencia a exibição de telas de fundo
    telaFundoSeletor(ANTAGONISTA)

    //limpa o texto da div que contém a história
    TEXTAREA.innerText = ''

    //exibe a história letra por letra
    efeitoTexto()

})

function Template() {
    return `
    Era uma vez ${NOME.value == '' ? 'Zezinho' : NOME.value}, mestre absoluto em ${combate(COMBATE).nome}, que naquele momento, não tinha nada melhor para fazer.
    
    Em seu marasmo decidiu então viajar até as terras de ${locais(LOCAL).local == "Isengard" || locais(LOCAL).local == "Acre" || locais(LOCAL).local == "Várzea Paulista" ? locais(LOCAL).local : locais(LOCAL).local + locais(LOCAL).adendo} onde os terríveis ${antagonistas(ANTAGONISTA).nome + antagonistas(ANTAGONISTA).adendo} causavam o caos enquanto tentavam ${causa(CAUSA)}.
    
    Até aí nada demais. 
    
    Mas nosso herói ${NOME.value == '' ? 'Zezinho' : NOME.value} percebeu que o caos causado o estava impedindo de completar sua jornada de ${problema(PROBLEMA)} e com isso, ${NOME.value == '' ? 'Zezinho' : NOME.value} decidiu que com todos os ${antagonistas(ANTAGONISTA).nome} ele iria acabar.
     ${locais(LOCAL).local == "Isengard" || locais(LOCAL).local == "Acre" ? locais(LOCAL).adendo :
            `
            ${NOME.value == '' ? 'Zezinho' : NOME.value} lutou durante muitos anos contra os ${antagonistas(ANTAGONISTA).nome}. Sua técnica de ${combate(COMBATE).nome} era muito mais poderosa do que qualquer arma do inimigo devido ${combate(COMBATE).adendo}
            
            Após derrotar todos ${antagonistas(ANTAGONISTA).forma} ${NOME.value == '' ? 'Zezinho' : NOME.value} voltou para casa após ${problema(PROBLEMA)} com sucesso, deixando para trás um rastro de destruição inimaginável.
         `
        }
    `
}

//select objetos de locais
function locais(varLocal) {
    switch (varLocal.value) {
        case "fSantana":
            let fSantana = {
                local: "Feira de Santana",
                adendo: ', terra mística de poderes misteriosos que torna a localização de todos os lugares em "do lado de Feira de Santana", utilizado como caminho mais rápido entre dois pontos desde tempos imemoriáveis, criado pelo mais poderoso de todos os magos: o Bira,'
            }
            return fSantana
        case "isengard":
            let isengard = {
                local: "Isengard",
                adendo: ` Chegando na metade do caminho, ${NOME.value == '' ? 'Zezinho' : NOME.value} abandonou tudo quando foi tomado por uma sensação desconhecida em seus ossos que não foi capaz de resistir, obrigando-o a passar o resto de sua vida como motorista de ônibus fazendo o transporte de hobbits para Isengard.`
            }
            return isengard
        case "varzea":
            let varzea = {
                local: "Várzea Paulista",
            }
            return varzea
        case "acre":
            let acre = {
                local: "Acre",
                adendo: ` 
                ${NOME.value == '' ? 'Zezinho' : NOME.value} foi...
                Nunca mais foi visto...
                Nunca mais foi encontrado...
                Nunca mais voltou...
                
                Afinal todos nós sabemos que o Acre não existe. Bom; todos menos ${NOME.value == '' ? 'Zezinho' : NOME.value}.`
            }
            return acre
    }
}

//select objetos de antagonistas
function antagonistas(varAntagonista) {
    switch (varAntagonista.value) {
        case "daleks":
            let daleks = {
                nome: "Daleks",
                forma: "os daleks",
                adendo: ", robôs que odeiam a tudo e a todos por não se conformarem com o fato que se parecem com caixas de correio alienígenas,"
            }
            return daleks
        case "reptilianos":
            let reptilianos = {
                nome: "Grupo Totalitarista de Reptilianos do Espaço",
                forma: "os reptilianos (tanto os comuns quanto os membros do grupo)",
                adendo: ", grupo dissidente do mesmo planeta dos reptilianos que estamos acostumados (aqueles que estão comandando o mundo), mas muito mais perigosos por acreditarem que seus conterrâneos estão pegando leve demais e pela aparência impecável em seus uniformes militares de grife,"

            }
            return reptilianos
        case "trolls":
            let trolls = {
                nome: "Trolls",
                forma: "os trolls",
                adendo: ", criaturas que se adaptaram aos tempos modernos e deixaram as pontes para morar em porões onde passam o dia na internet tentando estragar o humor dos usuários normais com fake news, flame wars e ideias sem fundamento,",
            }
            return trolls
        case "gnomos":
            let gnomos = {
                nome: "Gnomos",
                forma: "os gnomos",
                adendo: ", criaturinhas de chapéu pontudo que estão por trás de todas as meias perdidas no mundo por roubá-las enquanto dormimos,",
            }
            return gnomos
    }
}

//select objetos de combate
function combate(varCombate) {
    switch (varCombate.value) {
        case "capoeira":
            let capoeira = {
                nome: "Capoeira sem Ginga",
                adendo: "à falta de ginga aumentar exponencialmente a velocidade de ataque, impedindo uma luta justa."
            }
            return capoeira;
        case "baiana":
            let baiana = {
                nome: "Rodar a Baiana Armada até os Dentes",
                adendo: "à munição utilizada pela baiana conter os elementos químicos mais letais do universo já que esta baiana em questão era uma das melhores caçadoras intergaláticas. Nosso protagonista na realidade era bem inútil."
            }
            return baiana;
        case "twitter":
            let twitter = {
                nome: "Reclamar no Twitter com um NOKIA",
                adendo: "ao NOKIA ser o segundo elemento mais resistente já encontrado (O primeiro sendo Chuck Norris). Mesmo durante os períodos em que o Twitter estava fora do ar, cada golpe com o NOKIA destruía quarteirões."
            }
            return twitter;
        case "carrinho":
            let carrinho = {
                nome: "Dar Carrinho Sem Levar Cartão",
                adendo: ` ao fato de que levar cartão é a unica coisa no mundo capaz de parar um usuário de Carrinho, permitindo ${NOME.value == '' ? 'Zezinho' : NOME.value} deslizar sem tração por quilômetros enquanto seus inimigos eram lançados a metros de distância.`
            }
            return carrinho;
    }
}

//select objetos de causas
function causa(varCausa) {
    switch (varCausa.value) {
        case "direitos":
            return "lutar pelo direito das máquinas";

        case "dominio":
            return "dominar o mundo";

        case "got":
            return "impedir a segunda temporada de Game of Thrones";

        case "destroy":
            return "destruir todos os humanos";
    }
}

//select objetos de problemas
function problema(varProblema) {
    switch (varProblema.value) {
        case "skynet":
            return "impedir o surgimento da Skynet";

        case "som alto":
            return "acabar com o som alto do vizinho";

        case "correios":
            return "receber a entrega dos Correios";

        case "mundo":
            return "salvar o mundo";
    }
}

function efeitoTexto() {

    if (i < Template().length) {
        TEXTAREA.innerText += Template().charAt(i);
        i++;
        setTimeout(efeitoTexto, 45);
    }
}

function telaFundoSeletor(varAntagonista) {
    switch (varAntagonista.value) {
        case "daleks":
            let dalekBG = [
                "url('./images/dalek/dalek1.jpg')",
                "url('./images/dalek/dalek2.jpg')",
                "url('./images/dalek/dalek3.jpg')",
                "url('./images/dalek/dalek4.jpg')",
                "url('./images/dalek/dalek5.jpg')",
                "url('./images/dalek/dalek7.jpg')",
                "url('./images/dalek/dalek9.jpg')",
                "url('./images/dalek/dalek10.jpg')",
                "url('./images/dalek/dalek11.jpg')",
                "url('./images/dalek/dalek12.jpg')",
                "url('./images/dalek/dalek13.jpg')",
                "url('./images/dalek/dalek14.jpg')",
                "url('./images/dalek/dalek15.jpg')"
            ]
            telaFundoTempo(dalekBG)
            break;
        case "trolls":
            let trollsBG = [
                "url('./images/trolls/troll1.jpg')",
                "url('./images/trolls/troll2.jpg')",
                "url('./images/trolls/troll3.jpg')",
                "url('./images/trolls/troll4.jpg')",
                "url('./images/trolls/troll5.jpg')",
                "url('./images/trolls/troll6.png')",
                "url('./images/trolls/troll7.jpg')",
                "url('./images/trolls/troll8.jpg')",
                "url('./images/trolls/troll9.jpg')"
            ]
            telaFundoTempo(trollsBG)
            break;
        case "gnomos":
            let gnomosBG = [
                "url('./images/gnomos/gnomo1.jpg')",
                "url('./images/gnomos/gnomo2.jpg')",
                "url('./images/gnomos/gnomo3.jpg')",
                "url('./images/gnomos/gnomo4.jpg')",
                "url('./images/gnomos/gnomo5.jpg')",
                "url('./images/gnomos/gnomo6.jpg')",
                "url('./images/gnomos/gnomo7.jpg')",
            ]
            telaFundoTempo(gnomosBG)
            break;
        case "reptilianos":
            let reptBG = [
                "url('./images/reptilianos/rept1.jpg')",
                "url('./images/reptilianos/rept2.jpg')",
                "url('./images/reptilianos/rept3.jpg')"
            ]
            telaFundoTempo(reptBG)
            break;
    }
}

function telaFundoTempo(vetorBackground) {

    for (let index = 0; index < vetorBackground.length; index++) {

        let time = index;

        setTimeout(() => {
            WRAPPER.style.backgroundImage = vetorBackground[index]
        }, 5000 * (time));
    }

}