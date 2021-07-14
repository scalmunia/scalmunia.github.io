// Librerias
function $(selector) {
  return document.querySelector(selector);
}

// Declaraciones
function App(onboardingDateString, nowString) {
  const format = "DD/MM/YYYY HH:mm:ss";
  const onboardingDate = moment(onboardingDateString, format);
  const testStartDate = onboardingDate.clone().subtract(48, "hours");

  function calcCounters(startDate, endDate) {
    const diff = endDate.diff(startDate);
    const duration = moment.duration(diff);

    const counters = [
      {
        amount: duration.days(),
        label: "días",
      },
      {
        amount: duration.hours(),
        label: "horas",
      },
      {
        amount: duration.minutes(),
        label: "minutos",
      },
      {
        amount: duration.seconds(),
        label: "segundos",
      },
    ];

    return counters;
  }

  function renderCountdown(counters, selector) {
    const countdownHTML = counters
      .map(
        (counter) => /*html*/ `
      <div class="counter">
        <div class="amount">${counter.amount}</div>
        <div class="label">${counter.label}</div>
      </div>
    `
      )
      .join("");

    document.querySelector(selector).innerHTML = countdownHTML;
  }

  function renderOnboarding() {
    const onboarding = calcCounters(moment(nowString), onboardingDate);
    renderCountdown(onboarding, "#onboarding-countdown");
  }

  function renderCovidTest() {
    const selector = "#covid-test-countdown";
    const now = moment(nowString);
    const testBefore = calcCounters(moment(nowString), testStartDate);

    if (now.isBefore(testStartDate)) {
      renderCountdown(testBefore, selector);
    } else {
      document.querySelector(selector).innerHTML =
        '<div class="alert">Ya puedes hacer la prueba</div>';
    }
  }

  function renderCounters() {
    renderOnboarding();
    renderCovidTest();
  }

  renderCounters();
  setInterval(renderCounters, 1000);
}

// Ejecuciones
document.addEventListener("DOMContentLoaded", () => App("21/07/2021 06:40:00"));
