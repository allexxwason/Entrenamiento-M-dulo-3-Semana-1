document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Validar que el nombre no contenga números
  const nameInput = document.getElementById("name").value.trim();
  const ageInput = document.getElementById("age").value.trim();
  const age = Number(ageInput);
  const messageDiv = document.getElementById("message");
  const nameHasNumbers = /\d/.test(nameInput);
  if (nameHasNumbers) {
    messageDiv.textContent = "El nombre no debe contener números.";
    messageDiv.style.color = "red";
    return;
 }

 // Obtener los elementos de sonido
  const soundMinor = document.getElementById("soundMinor");
  const soundMajor = document.getElementById("soundMajor");
  

  messageDiv.textContent = "";

  if (nameInput === "" || ageInput === "") {
    messageDiv.textContent = "Por favor, completa todos los campos.";
    messageDiv.style.color = "red";
    return;
  }
      
  if (isNaN(age)) {
    console.error("Edad no válida.");// Validar que la edad sea un número válido
    messageDiv.textContent = "Error: La edad debe ser un número válido.";
    messageDiv.style.color = "red";
    return;
  }
  
  if (age < 18) {
    messageDiv.textContent = `Hola ${nameInput}, eres menor de edad. ¡aun no estas preparado para este Rave! tranquilo vendran mas eventos.`;
    messageDiv.style.color = "#08fc00";
    soundMinor.play();
  } else {
    messageDiv.textContent = `Hola ${nameInput}, eres mayor de edad. ¡Prepara tus golosinas y disfruta de la buena musica!`;
    messageDiv.style.color = "#f1c605";
    soundMajor.play();
  }
});
