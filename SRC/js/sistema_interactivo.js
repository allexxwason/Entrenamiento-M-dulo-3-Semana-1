document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

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
  const soundMinor = document.getElementById("soundMinor");
  const soundMajor = document.getElementById("soundMajor");

  messageDiv.textContent = "";

  if (nameInput === "" || ageInput === "") {
    messageDiv.textContent = "Por favor, completa todos los campos.";
    messageDiv.style.color = "red";
    return;
  }

  if (isNaN(age)) {
    console.error("Edad no válida.");
    messageDiv.textContent = "Error: La edad debe ser un número válido.";
    messageDiv.style.color = "red";
    return;
  }

  if (age < 18) {
    messageDiv.textContent = `Hola ${nameInput}, eres menor de edad. ¡Sigue aprendiendo y disfrutando la vida!`;
    messageDiv.style.color = "#08fc00";
    soundMinor.play();
  } else {
    messageDiv.textContent = `Hola ${nameInput}, eres mayor de edad. ¡Prepárate y colócate a trabajar!`;
    messageDiv.style.color = "#f1c605";
    soundMajor.play();
  }
});
