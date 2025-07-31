function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function agendar() {
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const nome = document.getElementById("nome").value;

  if (!servico || !data || !hora || !nome) {
    alert("Preencha todas as informações.");
    return;
  }

  const msg = `Olá, meu nome é ${nome}. Gostaria de agendar:\nServiço: ${servico}\nData: ${data}\nHorário: ${hora}`;
  const fone = "5577991821749";
  const url = `https://wa.me/${fone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

window.addEventListener("scroll", function() {
  const btn = document.querySelector(".top-btn");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
