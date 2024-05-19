const words = [
	'Ir a Fundidora', 
	'Ir a Fundidora', 
	'Ir a Fundidora', 
	'Cine, Pelicula Random', 
	'Cine, Pelicula Random', 
	'Cine, Pelicula Random', 
	'Caminar por Santa Lucia', 
	'Caminar por Santa Lucia', 
	'Comer algo y ver una pelicula mala',
	'Comer algo y ver una pelicula mala',
	'Jugar Videojuegos',
	'Jugar Videojuegos',
	'Bicicletas Fundidora', 
	'Bicicletas Fundidora',
	];
let currentWords = words.slice(); // Copia inicial de las palabras	
const wordContainer = document.getElementById('word-container');
const wordList = document.getElementById('word-list');
let animationInterval;

function startAnimation() {
  animationInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * currentWords.length);
    wordContainer.textContent = currentWords[randomIndex];
  }, 100); // Cambia la palabra cada 0.1 segundo (100 milisegundos)
}


function stopAnimation(selectedIndex) {
  clearInterval(animationInterval);
  const word = words[selectedIndex];
  // wordContainer.innerHTML = ''; // Limpiar el contenedor

   // Cambiar el color de los botones a azul
  wordContainer.style.color = '#007bff'; // Azul
}

function selectRandomWord() {
  startAnimation();
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    stopAnimation(randomIndex);
  }, 3000); // Cambia la duración de la animación ajustando este valor
}


// // Agregar palabras a la lista al cargar la página
// words.forEach((word, index) => {
//   const li = document.createElement('li');
//   const span = document.createElement('span');
//   span.textContent = word;
//   li.appendChild(span);

//   // Botón para quitar la palabra
//   const removeButton = document.createElement('button');
//   removeButton.textContent = 'Quitar';
//   removeButton.classList.add('remove-button');
//   removeButton.onclick = function() {
//     wordList.removeChild(li);
//   };
//   li.appendChild(removeButton);

//   // Botón para duplicar la palabra
//   const duplicateButton = document.createElement('button');
//   duplicateButton.textContent = 'Duplicar';
//   duplicateButton.classList.add('duplicate-button');
//   duplicateButton.onclick = function() {
//     const newLi = li.cloneNode(true);
//     li.insertAdjacentElement('afterend', newLi);
//   };
//   li.appendChild(duplicateButton);

//   wordList.appendChild(li);
// });



function agregar() {
  const cantidadInput = document.getElementById('cantidad');
  const nuevoInput = document.getElementById('nuevo');
  const cantidad = parseInt(cantidadInput.value);
  const nuevaPalabra = nuevoInput.value.trim();
  
  if (cantidad > 0 && nuevaPalabra !== '') {
    for (let i = 0; i < cantidad; i++) {
      currentWords.push(nuevaPalabra);
    }
    cantidadInput.value = '';
    nuevoInput.value = '';
    
    // Actualizar la lista de palabras en la página
    createWordList();
  }
}







// Función para crear la lista de palabras
function createWordList() {
  // Limpiar la lista actual
  wordList.innerHTML = '';

  // Crear un <li> por cada palabra en 'currentWords'
  currentWords.forEach((word) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = word;
    li.appendChild(span);

    // Botón para quitar la palabra
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Quitar';
    removeButton.classList.add('remove-button');
    removeButton.onclick = function() {
      currentWords = currentWords.filter(w => w !== word); // Quitar la palabra del array
      createWordList(); // Volver a crear la lista
    };
    li.appendChild(removeButton);

    // Botón para duplicar la palabra
    const duplicateButton = document.createElement('button');
    duplicateButton.textContent = 'Duplicar';
    duplicateButton.classList.add('duplicate-button');
    duplicateButton.onclick = function() {
      currentWords.splice(currentWords.indexOf(word) + 1, 0, word); // Duplicar la palabra en la siguiente posición
      createWordList(); // Volver a crear la lista
    };
    li.appendChild(duplicateButton);

    // Agregar el <li> a la lista
    wordList.appendChild(li);
  });
}


// Llamar a la función para crear la lista al cargar la página
createWordList();