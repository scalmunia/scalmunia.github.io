
var currentDate = Date.now();
var currentDay = currentDate / 1000 / 60 / 60 / 24;
var wholeNumber = Math.trunc(currentDay);

const dialog = /*html*/`
  <div class="dialog-container">
    <header class="dialog-header">
      ¿Qué crema toca hoy?
    </header>
    <img id="imagen" class="asdf"! />
    <div class="dialog-content">
      Hoy toca la crema: <span id="crema"></span>
    </div>    
  </div>
`;

document.body.innerHTML = dialog;

if (wholeNumber % 2 == 0) {
  document.getElementById('crema').innerHTML = 'roja';
} 
else {
  document.getElementById('crema').innerHTML = 'azul';
}


// console.log(currentDay);
// console.log(wholeNumber);




 

 



//cambair document.write por document.body.innerHtml....