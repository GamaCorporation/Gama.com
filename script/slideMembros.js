document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.equipe-wrapper');
    const prevBtn = document.querySelector('.equipe-btn.prev');
    const nextBtn = document.querySelector('.equipe-btn.next');
    
    if (!wrapper || !prevBtn || !nextBtn) return;
    
    // Calcular a largura de um membro + gap
    const member = document.querySelector('.membro');
    if (!member) return;
    
    const gap = 25; // mesmo valor do gap no CSS
    const memberWidth = member.offsetWidth + gap;
    
    // Função para rolar o slider
    function scrollSlider(direction) {
        const scrollAmount = memberWidth * 2; // Rola 2 membros por vez
        wrapper.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
    }
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', () => scrollSlider('prev'));
    nextBtn.addEventListener('click', () => scrollSlider('next'));
});

// Script para garantir que os links estão funcionando
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.socials a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicado:', this.href);
            // Remova o comentário abaixo para evitar que o link abra em nova janela
            // e.preventDefault();
            // window.location.href = this.href;
        });
    });
    
    // Verifica se o Font Awesome foi carregado
    const checkFontAwesome = setInterval(function() {
        if (window.FontAwesome) {
            console.log('Font Awesome carregado com sucesso!');
            clearInterval(checkFontAwesome);
        }
    }, 100);
    
    // Timeout para caso o Font Awesome não carregue
    setTimeout(function() {
        if (!window.FontAwesome) {
            console.warn('Font Awesome não carregado. Tentando carregar localmente...');
            // Aqui você pode carregar uma versão local se necessário
        }
    }, 3000);
});