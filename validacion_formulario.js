const form = document.querySelector('form[name="Contactoparainscripción"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["nombres"].value;
  const flastname = form.elements["apellidos"].value;
  const femail = form.elements["email"].value;
  const fphone = form.elements["telefono"].value;

  if (!fname || !flastname || !femail || !fphone) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else if (!validarTlf(fphone)) {
    event.preventDefault();
    alert("Por favor, ingrese un telefono valido");
  } else {
    const confirmation = confirm(
      "Esta a punto de enviar el formulario, ¿Desea Continuar?"
    );
    if (!confirmation) {
      event.preventDefault();
    }
  }
});

//CREAR FUNCION validateEmail(femail)
function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
  return re.test(String(femail).toLowerCase());
}
//Funcion validaremail
function validarTlf(fphone) {
  const tlf = /^[0-9]{9}$/;
  return tlf.test(String(fphone));
}
