let horarios = [];
// Evento del formulario
document.getElementById("horarioForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Obtener datos
  const fecha = document.getElementById("date-horario").value;
  const hora = document.getElementById("hour-horario").value;
  const curso_nombre = document.getElementById("curso-horario").value;
  // Validación
  if (!fecha || !hora || !curso_nombre) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }
  // Agregar alumno
  const nuevo_curso = { fecha, hora, curso_nombre };
  horarios.push(nuevo_curso);
  // Mostrar cursos
  mostrarRanking();
  // Limpiar formulario
  this.reset();
});
// Mostrar lista ordenada con barra
function mostrarRanking() {
  const listahorario = document.getElementById("listahorario");
  listahorario.innerHTML = "";
  horarios.forEach((est) => {
    const lii = document.createElement("li");
    lii.className = "cursoo";
    const textoo = document.createElement("span");
    textoo.textContent = `${est.fecha} ${est.hora} ${est.curso_nombre}`;
    lii.appendChild(textoo);
    listahorario.appendChild(lii);
  });
}
