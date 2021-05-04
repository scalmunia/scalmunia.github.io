// Se declara y ejecuta en el mismo tiempo
// Una función de tipo flecha donde metemos todo el código
// Para encapsular las variables (impedir que colisione con otras
// del mismo nombre)

(async () => {
  // Empezamos poniendo un console.log del "document.body"
  //  para saber si el HTML es accesible desde el javascript
  console.log('body:', document.body);

  // url para el endpoint (recurso) del que queremos recuperar datos
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  // Se realiza la llamada a la API
  const response = await fetch(url).then(res => res.json());
  console.log(response );

  // true o false
  const hasPokemon = response.results.length > 0;
  if (hasPokemon) {
    document.body.innerHTML = 'Cargado!'
  } else {
    document.body.innerHTML = 'No hay resultados'
  };

  console.log(hasPokemon);

  
})();

