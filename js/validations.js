/* Código hecho por: Josué Enrique Luna Palafox */
const compareDate = () => {
  //Obtener los valores de la edad y la fecha de nacimiento
  let age = document.getElementById("age").value;
  let date = document.getElementById("birth_date").value;

  //Obtiene el año de su nacimiento de acuerdo a la edad que ingreso
  let actualDate = new Date().getFullYear();
  let originalAge = actualDate - age;

  //EL primer if es para asegurarse de que exista un valor en los campos, de lo contrario ignora la siguiente comparación.
  if (!isNaN(new Date(date).getFullYear()) && age !== "") {
    //Compara el año de acuerdo a la edad ingresada y la compara con el año que ingreso de la fecha de nacimiento
    if (originalAge !== new Date(date).getFullYear()) {
      alert(
        "La fecha de nacimiento no concuerda con la edad, revisala por favor"
      );
    }
  }
};

const deleteButton = () => {
  alert("Los datos del formulario se eliminarán");
};

const comparePassword = () => {
  //Obtener los valores de la contraseña
  let password = document.getElementById("password").value;
  let conPassword = document.getElementById("confirm-password").value;

  //Revisar que ambas contraseñas sean correctas
  if(password !== conPassword){
    alert("Las contraseñas no coinciden, por favor, revisalas")
  }
}

/* Contador básico de libros */
let counter = 0;
const bookCounter = () => {
  let actual = document.getElementById("book-counter");
  counter++;
  if(counter <= 3){
    actual.innerHTML = counter;
  }else{
    alert("Cuidado, solo puedes solicitar 3 libros en un periodo máximo de 1 semana");
  }
}