export function openModal(html: string) {
  closeModal();

  const wrap = document.createElement('div');
  
  wrap.className = 'modal-backdrop';
  wrap.innerHTML = `
    <div class="modal">
      <button class="modal-close" aria-label="Fechar">×</button>
      <div class="modal-content">${html}</div>
    </div>`;

  document.body.appendChild(wrap);

  wrap.querySelector('.modal-close')?.addEventListener('click', closeModal);
  
  wrap.addEventListener('click', (e) => {
    if (e.target === wrap) closeModal();
  });

  window.addEventListener('keydown', escToClose);
}

export function closeModal() {
  const wrap = document.querySelector('.modal-backdrop');
  
  if (wrap) {
    wrap.remove();
    window.removeEventListener('keydown', escToClose);
  }
}

function escToClose(e: KeyboardEvent) {
  if (e.key === 'Escape') closeModal();
}
