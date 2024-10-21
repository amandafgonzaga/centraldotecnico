let lastScrollTop = 0; // Para rastrear a posição de rolagem anterior
    const navbar = document.querySelector('.navegacao-principal');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Se o usuário rolar para baixo, esconda a barra de navegação
        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-40px'; // Ajuste conforme a altura da barra
        } else {
            navbar.style.top = '0'; // Mostra a barra
        }
        lastScrollTop = scrollTop; // Atualiza a posição de rolagem anterior
    });

function toggleCourse(element) {
    const details = element.nextElementSibling; // A próxima div (detalhes do curso)
    if (details.style.display === "none") {
        details.style.display = "block"; // Mostra os detalhes
    } else {
        details.style.display = "none"; // Esconde os detalhes
    }
}



let currentIndex = 0; // Índice do depoimento atual
const depoimentos = document.querySelectorAll('.depoimento');

function showNextDepoimento() {
    // Oculta o depoimento atual
    depoimentos[currentIndex].classList.remove('active');
    // Calcula o próximo índice
    currentIndex = (currentIndex + 1) % depoimentos.length; // Volta ao primeiro se atingir o final
    // Mostra o próximo depoimento
    depoimentos[currentIndex].classList.add('active');
}

// Inicia o ciclo de alternância de depoimentos
setInterval(showNextDepoimento, 5000); // Altera a cada 5 segundos
