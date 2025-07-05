const form_registro_alumno = document.querySelector(
  'form[name="registraralumno"]'
);
form_registro_alumno.addEventListener("submit", (event) => {
  const fname = form_registro_alumno.elements["alumno_name"].value;
  const flastname = form_registro_alumno.elements["alumno_lastname"].value;
  const femail = form_registro_alumno.elements["alumno_mail"].value;
  const fpw = form_registro_alumno.elements["alumno_pw"].value;

  if (!fname || !flastname || !femail || !fpw) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else if (!validatePw(fpw)) {
    event.preventDefault();
    alert(
      "Su contraseña debe tener al menos una mayuscula, una minuscula y un numero."
    );
  } else {
    const confirmation = confirm(
      "Esta a punto de registrarse a UPC, ¿Desea Continuar?"
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
function validatePw(fpw) {
  const mayus = /[A-Z]/.test(fpw);
  const minus = /[a-z]/.test(fpw);
  const numero = /[0-9]/.test(fpw);
  return mayus && minus && numero;
}
