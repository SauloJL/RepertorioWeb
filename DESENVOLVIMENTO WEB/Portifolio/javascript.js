document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const expandableSections = document.querySelectorAll('.expandable-section');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.close');

    // Função para abrir a janela modal
    function openModal(content) {
        modal.classList.add('modal-open');
        modalContent.innerHTML = content.innerHTML;
    }

    // Função para fechar a janela modal
    function closeModal() {
        modal.classList.remove('modal-open');
        modalContent.innerHTML = '';
    }

    // Adicione um evento de escuta para cada seção expansível
    expandableSections.forEach(section => {
        section.addEventListener('click', function () {
            // Adicione ou remova a classe 'modal-open' para mostrar ou ocultar a janela modal
            openModal(this);
        });
    });

    // Adicione um evento de escuta para fechar a janela modal ao clicar no botão de fechar
    closeBtn.addEventListener('click', closeModal);

    // Adicione um evento de escuta para fechar a janela modal ao clicar fora dela
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Adicione um evento de escuta para fechar a janela modal ao pressionar a tecla Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
