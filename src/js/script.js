const botoes = document.querySelectorAll(".button");
const background = document.querySelectorAll(".background");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        ResetButtons();
        botao.classList.add("selecionado");

        const btnselecionado = botao.getAttribute("name");
        background.forEach(BG => {
            const BGSelecionado = BG.getAttribute("name");
            if (BGSelecionado == btnselecionado && 
                !BG.classList.contains("selecionado")) {
                ResetBackgrounds();
                BG.classList.add("selecionado");
            }
        });
    });
});

const ResetButtons = () => {
    botoes.forEach(botao => {
        botao.classList.remove("selecionado");
    });
}

const ResetBackgrounds = () => {
    background.forEach(BG => {
        BG.classList.remove("selecionado");
    });
}
