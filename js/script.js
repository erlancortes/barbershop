function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

function agendar() {
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const nome = document.getElementById('nome').value;

  if (!servico || !data || !hora || !nome) {
    alert('Preencha todos os campos antes de agendar!');
    return;
  }

  const msg = `Olá, meu nome é ${nome}. Quero agendar um ${servico} no dia ${data} às ${hora}.`;
  const url = `https://wa.me/5577991821749?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}
