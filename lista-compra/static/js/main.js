function appListaCompra() {
  /** DECLARATIONS */ 

  // De esta manera unificamos todos los selectores al DOM en un único objeto, de tal forma
  // Que los tenemos reunidos en un mismo lugar y accedemos a él siempre con "$.loquesea"
  const $ = { 
    input: document.querySelector('#product-input'),
    button: document.querySelector('#product-add'),
    list: document.querySelector('#product-list'),
  };

  const state = {
    list: [],
  };

  /** 
   * Añade un item al listado 
   * @param {string} item elemento a añadir
   */
  function addItem(item) {
    state.list.push(item);
    console.log(state);
  }

  /** 
   * Renderiza en el DOM el listado (actualizandolo)
   */
  function renderProductList() {
    const list = state.list.map((item) => `<li>${item}</li>`)
    const html = list.join('')
    $.list.innerHTML = html;
  }

  
  /** EXECUTIONS */
  $.button.addEventListener('click', () => {
    // Actualizar el listado
    addItem($.input.value);
    renderProductList();
    
    // Limpiar el campo
    $.input.value = '';
  });
};

/* EVENTOS */

// Evento que se usa para ejecutar el js después de haberse cargado el HTML
document.addEventListener('DOMContentLoaded', appListaCompra); 