function mudarTema(tipo) {
  const root = document.documentElement;
  const footer = document.querySelector('.footer-pequenalua');
  if (tipo === 'neutro') {
    root.style.setProperty('--primary', '#ffe066');
    root.style.setProperty('--primary-dark', '#ffd000');
    footer.style.background = "linear-gradient(90deg, #6ec1e4 0%, #ffe066 48%, #ff72b6 100%)";
  } else if (tipo === 'menina') {
    root.style.setProperty('--primary', '#ff72b6');
    root.style.setProperty('--primary-dark', '#e91e63');
    footer.style.background = "linear-gradient(90deg, #ffd6ed 0%, #ff72b6 50%, #ffbada 100%)";
  } else if (tipo === 'menino') {
    root.style.setProperty('--primary', '#6ec1e4');
    root.style.setProperty('--primary-dark', '#2596be');
    footer.style.background = "linear-gradient(90deg, #6ec1e4 0%, #b7eaff 60%, #e0f7ff 100%)";
  }
  // Botão ativo
  document.querySelectorAll('.theme-btn').forEach(btn=>btn.classList.remove('active'));
  if(tipo==='neutro') document.querySelector('.theme-btn.neutro').classList.add('active');
  if(tipo==='menina') document.querySelector('.theme-btn.menina').classList.add('active');
  if(tipo==='menino') document.querySelector('.theme-btn.menino').classList.add('active');
}
window.onload = function() { mudarTema('neutro'); };