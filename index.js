
// Ajustá la fecha del evento aquí
const fechaCumple = new Date("2025-06-27T17:16:00").getTime();
const countdown = document.getElementById("countdown");

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaCumple - ahora;

  const dias     = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas    = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos  = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  countdown.textContent = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;

  if (distancia < 0) {
    clearInterval(intervalo);
    countdown.textContent = "¡La fiesta ya comenzó!";
  }
}, 1000);
