function mudarTema(tema) {
  document.body.classList.remove('tema-menino', 'tema-menina');
  var btns = document.querySelectorAll('nav button');
  btns.forEach(btn => btn.classList.remove('active'));
  if (tema === 'menino') {
    document.body.classList.add('tema-menino');
    btns[2].classList.add('active');
  } else if (tema === 'menina') {
    document.body.classList.add('tema-menina');
    btns[0].classList.add('active');
  } else {
    // Neutro
    btns[1].classList.add('active');
  }
}
window.onload = function() { mudarTema('neutro'); }; 