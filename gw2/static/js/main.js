function App() {
  const $container = document.querySelector('#container');
  const $button = document.querySelector('#button');

  function loadProfessions() {
    const promise = fetch("https://api.guildwars2.com/v2/professions");
    $container.innerHTML = 'Cargando...';
  
    promise
      .then(res => res.json())
      .then(data => {
        const list = data.map(profession => /*html*/`<li>${profession}</li>`).join('')
        $container.innerHTML = /*html*/`<ul>${list}</ul>`
      })
  }

  // Event listeners
  $button.addEventListener('click', loadProfessions);

}

document.addEventListener("DOMContentLoaded", App);
