const parentContainer = document.querySelector('.dahafazla-container')

parentContainer.addEventListener('click', event=>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes('dahafazla-buton');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.dahafazla-text');

    currentText.classList.toggle('dahafazla-text--show');

    current.textContent = current.textContent.includes('Daha fazla') ? "Daha az" : "Daha fazla";

} )