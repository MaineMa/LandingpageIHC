let estudiantes = [];
// Evento del formulario
document.getElementById("notaForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Obtener datos
  const codigo = document.getElementById("code").value.trim();
  const nombres = document.getElementById("name").value.trim();
  const apellidos = document.getElementById("lastname").value.trim();
  const curso = document.getElementById("course").value;
  const notaStr = document.getElementById("note").value;
  const nota = Number(notaStr);
  // Validación
  if (
    codigo === "" ||
    nombres === "" ||
    apellidos === "" ||
    curso === "" ||
    notaStr === "" ||
    isNaN(nota) ||
    nota < 0 ||
    nota > 20
  ) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }
  // Agregar alumno
  const nuevo = { codigo, nombres, apellidos, curso, nota };
  estudiantes.push(nuevo);
  // Orden descendente
  estudiantes.sort((a, b) => b.nota - a.nota);
  // Mostrar resultado
  mostrarRanking();
  // Limpiar formulario
  this.reset();
});
// Mostrar lista ordenada con barra
function mostrarRanking() {
  const lista = document.getElementById("listaEstudiantes");
  lista.innerHTML = "";
  estudiantes.forEach((est) => {
    const li = document.createElement("li");
    li.className = "barra-progreso";
    const barra = document.createElement("div");
    barra.className = "progreso";
    barra.style.width = `${(est.nota / 20) * 100}%`;
    const texto = document.createElement("span");
    texto.textContent = `${est.nombres} ${est.apellidos} (${est.curso}) – Nota: ${est.nota}`;
    li.appendChild(barra);
    li.appendChild(texto);
    lista.appendChild(li);
  });
}
