const modal = document.getElementById('modal');
document.getElementById('openModal').onclick = () => modal.classList.add('show');
document.getElementById('closeModal').onclick = () => modal.classList.remove('show');

document.getElementById('openModal').addEventListener('click', () => {
  const email = "contato.vinicius.pessoa@gmail.com";
  navigator.clipboard.writeText(email);
});