// Librerias
function $(selector) {
  return document.querySelector(selector);
}

// Declaraciones
function App() {
  // Declaraciones de la App

  const calcCounter = () => {
    const now = moment();
    const onboarding = moment("21/07/2021 06:40:00", "DD/MM/YYYY HH:mm:ss");
    const diff = onboarding.diff(now);
    const counters = moment.utc(diff).format("DD_HH_mm_ss").split("_");

    return counters;
  };

  const renderCounter = () => {
    const labels = ["dias", "horas", "minutos", "segundos"];
    const countdown = calcCounter()
      .map(
        (counter, index) => /*html*/ `
        <div class="counter">
          <div class="amount">${counter}</div>
          <div class="label">${labels[index]}</div>
        </div>
      `
      )
      .join("");

    $("#main-countdown").innerHTML = countdown;
  };

  // Ejecuciones de la App
  renderCounter();
  setInterval(renderCounter, 1000);
}

// Ejecuciones
document.addEventListener("DOMContentLoaded", () => App());
