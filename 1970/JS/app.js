document.addEventListener("DOMContentLoaded", () => {
    // Adiciona um efeito interativo simples nos cards de curiosidade ao clicar
    const triviaItems = document.querySelectorAll(".trivia-item");

    triviaItems.forEach(item => {
        item.addEventListener("click", () => {
            // Alterna a classe de destaque no item clicado
            item.classList.toggle("active-trivia");
            
            // Pequena animação de pulso ao clicar
            item.style.transform = "scale(1.02)";
            setTimeout(() => {
                item.style.transform = "none";
            }, 150);
        });
    });

    // Log comemorativo no console do desenvolvedor
    console.log("⚽ Viva o Futebol-Arte! Página da Copa de 1970 carregada com sucesso.");
});