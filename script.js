let lastScrollTop = 0; // Para rastrear a posição de rolagem anterior
const navbar = document.querySelector('.navegacao-principal');

// Evento de rolagem para esconder/mostrar a barra de navegação
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Se o usuário rolar para baixo, esconda a barra de navegação
    if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
        navbar.style.top = `-${navbar.offsetHeight}px`; // Ajusta a barra para cima
    } else {
        navbar.style.top = '0'; // Mostra a barra
    }
    lastScrollTop = scrollTop; // Atualiza a posição de rolagem anterior
});


// Lógica para alternar depoimentos
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

$// Inicializa o carrossel Slick
$(document).ready(function(){
    $('.grid-galeria').slick({
        dots: true, // Para mostrar pontos de navegação
        infinite: true, // Para repetir o carrossel
        speed: 500, // Velocidade da transição
        slidesToShow: 3, // Número de slides a mostrar
        slidesToScroll: 1, // Número de slides a rolar
        autoplay: true, // Ativa o autoplay
        autoplaySpeed: 2000, // Tempo em milissegundos entre as transições (2000ms = 2 segundos)
        prevArrow: '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>', // Botão de voltar
        nextArrow: '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>', // Botão de avançar
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Exibir 2 slides em telas menores
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1, // Exibir 1 slide em telas pequenas
                    slidesToScroll: 1
                }
            }
        ]
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.secao-duvidas form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const whatsapp = document.getElementById('whatsapp').value;

        // Gera a URL para o WhatsApp
        const whatsappMessage = `Nome: ${name}\nEmail: ${email}\nAssunto: ${subject}\nWhatsApp: ${whatsapp}`;
        const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

        // Abre o link no WhatsApp
        window.open(whatsappURL, '_blank');
    });
});


function avisoCookiesDrcode({
    message='Utilizamos cookies para que vocÃª tenha a melhor experiÃªncia em nosso site. Para saber mais acesse nossa pÃ¡gina de PolÃ­tica de Privacidade',
    backgroundColor='#000000',
    textColor='#ffffff',
    buttonBackgoundColor='#0e9a20',
    buttonHoverBackgoundColor='#0a6b16',
    buttonTextColor='#ffffff'
}){
    var check = localStorage.getItem('avisoCookies')
    if(!check){
        var body = document.getElementsByTagName('body')[0];
        body.innerHTML += `
        <style>
            #aviso-cookies{z-index:100000;display:flex;width:100%;position:fixed;bottom:0;left:0;background-color:${backgroundColor};padding:20px;box-sizing:border-box;box-shadow:0 0 7px rgb(0 0 0 / 50%);justify-content:center;align-items:center}
            #texto-cookies{font-family:'Open Sans', 'Arial',sans-serif;font-size:14px;margin:0 20px 0 0;line-height:1.25rem;color:${textColor}}
            #texto-cookies * {font-family:'Open Sans', 'Arial',sans-serif;font-size:14px;line-height:1.25rem;color:${textColor}}
            #entendi-cookies{background:${buttonBackgoundColor};transition: 0.3s all ease;-o-transition: 0.3s all ease;-ms-transition:0.3s all ease;-moz-transition:0.3s all ease;-webkit-transition:0.3s all ease;color:${buttonTextColor};text-shadow:0 1px 1px rgb(0 0 0 / 20%);border-radius: 2px;border: 1px solid rgba(0,0,0,0.1);border-bottom-color: rgba(0,0,0,0.2);font-size: 14px;padding: 6px 14px;cursor: pointer;line-height:19px}
            #entendi-cookies:hover{background-color: ${buttonHoverBackgoundColor};}
        </style>
        <div id="aviso-cookies">
            <span id="texto-cookies">${message}</span>
            <button id="entendi-cookies">Entendi</button>
        </div>`;
        document.getElementById('entendi-cookies').addEventListener('click', function(){
            localStorage.setItem("avisoCookies", "accept");
            document.getElementById('aviso-cookies').remove()
        })
    }
}

let currentDepoimentoIndex = 0;

function showDepoimento(index) {
    const wrapper = document.querySelector('.depoimentos-wrapper');
    const depoimentos = document.querySelectorAll('.depoimento');
    const totalDepoimentos = depoimentos.length;

    // Muda a transformação para exibir o depoimento correto
    wrapper.style.transform = `translateX(-${(index * 100) / totalDepoimentos}%)`;
}

function changeDepoimento(direction) {
    const depoimentos = document.querySelectorAll('.depoimento');
    const totalDepoimentos = depoimentos.length;

    currentDepoimentoIndex += direction;

    // Lógica para reiniciar o carrossel de forma infinita
    if (currentDepoimentoIndex < 0) {
        currentDepoimentoIndex = totalDepoimentos - 1; // vai para o último depoimento
    } else if (currentDepoimentoIndex >= totalDepoimentos) {
        currentDepoimentoIndex = 0; // volta para o primeiro depoimento
    }

    showDepoimento(currentDepoimentoIndex);
}

// Inicia mostrando o primeiro depoimento
showDepoimento(currentDepoimentoIndex);

// Lógica de eventos para os botões
document.querySelector('.prev').addEventListener('click', () => {
    changeDepoimento(-1);
});
document.querySelector('.next').addEventListener('click', () => {
    changeDepoimento(1);
});

// Opção de autoplay (pode ser ajustada ou removida se não desejar)
setInterval(() => {
    changeDepoimento(1);
}, 5000); // Troca a cada 5 segundos

