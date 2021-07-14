// Librerias
function $(selector) {
  return document.querySelector(selector);
}

// Declaraciones
function App() {
  // Declaraciones de la App

  const calcCounterOnboarding = () => { 
    const now = moment();   
    const onboarding = moment("21/07/2021 06:40:00", "DD/MM/YYYY HH:mm:ss");   
    const diff = onboarding.diff(now);
    const counters = moment.utc(diff).format("DD_HH_mm_ss").split("_");

    return counters;
  };

  const calcCounterTestDate = () => {
    const now = moment(); 
    const testDate = moment("19/07/2021 06:40:00", "DD/MM/YYYY HH:mm:ss"); 
    const diff = testDate.diff(now);
    const counters = moment.utc(diff).format("DD_HH_mm_ss").split("_");

    return counters;
  };

  const calcCounter48HoursBefore = () => { 
    const testDate = moment("19/07/2021 06:40:00", "DD/MM/YYYY HH:mm:ss");  
    const onboarding = moment("21/07/2021 06:40:00", "DD/MM/YYYY HH:mm:ss"); 
    const diff = onboarding.diff(testDate);
    const counters = moment.utc(diff).format("DD_HH_mm_ss").split("_");

    return counters;
  };  
    
  const renderCounters = () => {
    const labels = ["dias", "horas", "minutos", "segundos"];
    const countdownOnboarding = calcCounterOnboarding()
      .map(
        (counter, index) => /*html*/ `
        <div class="counter">
          <div class="amount">${counter}</div>
          <div class="label">${labels[index]}</div>
        </div>
      `
      )
      .join("");

    $("#main-countdown").innerHTML = countdownOnboarding;
    
    const nowTimeStamp = Date.now(); 
    const testDateTimeStamp = Date.parse('Mon, 19 Jul 2021 06:40:00 GMT');

    if(nowTimeStamp <= testDateTimeStamp) {

      const countdownTestDate = calcCounterTestDate()
        .map(
          (counter, index) => /*html*/ `
          <div class="counter">
            <div class="amount">${counter}</div>
            <div class="label">${labels[index]}</div>
          </div>
        `
        )
        .join("");
  
      $("#second-countdown").innerHTML = countdownTestDate;

    } else {
      
          const countdown48HoursBefore = calcCounter48HoursBefore()
            .map(
              (counter, index) => /*html*/ `
              <div class="counter">
                <div class="amount">${counter}</div>
                <div class="label">${labels[index]}</div>
              </div>
            `
            )
            .join("");
      
          $("#second-countdown").innerHTML = countdown48HoursBefore;
    };
  };

  
  // Ejecuciones de la App
  renderCounters();
  setInterval(renderCounters, 1000);
};

// Ejecuciones
document.addEventListener("DOMContentLoaded", () => App());


