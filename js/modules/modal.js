export default function initModal() {
  const openButton = document.querySelector('[data-modal="open"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function openModal(event) {
    event.preventDefault();
    containerModal.classList.add('ativo');
  }

  function closeModal(event) {
    event.preventDefault();
    containerModal.classList.remove('ativo');
  }

  function OutsideModalClick(event) {
    event.target === containerModal ? closeModal(event) : null;
  }

  if (openButton && closeButton && containerModal) {
    openButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    containerModal.addEventListener('click', OutsideModalClick);
  }
}
