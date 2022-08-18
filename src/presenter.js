
const first = document.querySelector("#greet");

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const saludar = first.value;
  

  div.innerHTML = "<p>" + `Que tal ${saludar}` + "</p>";
});
