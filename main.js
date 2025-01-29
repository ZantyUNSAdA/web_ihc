
// Calculadora IMC.
function calculate(){
    var height= (document.getElementById("height").value)/100;
    var weight = document.getElementById("weight").value;

    var imc = weight / height ** 2;
    var resultado=""
    if(imc<18.5){
        resultado="Usted se encuentra por debajo del peso recomendado.";
    }else if(imc<24.9){
        resultado="Usted se encuentra en un peso saludable!";
    }else if(imc<39.9){
        resultado="Usted se encuentra por encima del peso recomendado.";
    }else if(imc>39.9){
        resultado="Usted se encuentra muy por encima del peso recomendado.";
    }
    document.getElementById("text_area").innerText=resultado;
}

// Verificar campos llenos en el formulario.
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Bucle y prevencion del envio.
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');

      // Validacion
      const invalidFeedbackElements = form.querySelectorAll('.invalid-feedback');
      let isValid = true;
      for (let i = 0; i < form.elements.length - 1; i++) { // Excluye el boton de envio.
        const input = form.elements[i];
        if (input.checkValidity() === false) {
          isValid = false;
          invalidFeedbackElements[i].style.display = 'block';
        } else {
          invalidFeedbackElements[i].style.display = 'none';
        }
      }
    }, false);
  });

  
    // Agrega un evento 'click' al botón de envío (btn_Enviar)
    const btn_Enviar = document.getElementById('btn_Enviar'); // Asegúrate de obtener el botón correctamente
  
    btn_Enviar.addEventListener('click', function() {
      // Verificar si el formulario es válido antes de mostrar SweetAlert
      if (document.querySelector('.needs-validation').checkValidity()) {
        mostrarSweetAlert();
      }
    });
  
    // Define la función mostrarSweetAlert para mostrar la ventana de SweetAlert
    function mostrarSweetAlert() {
      Swal.fire({
        title: '¡Solicitud exitosa!',
        text: '¡Muchas gracias por elegirnos! Nos pondremos en contacto contigo en las próximas 48 horas.',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        background: '#e1f4e8',
        //footer: 'Texto en el pie de la alerta' ,
      });
    }
  })();

  // scrollTop Button
const scrollTopButton = document.getElementById('scrollTopButton');

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function limpiarCampos() {
    // Obtenemos los elementos de los campos por su ID
    const alturaInput = document.getElementById('height');
    const pesoInput = document.getElementById('weight');

    // Limpiamos los valores de los campos
    alturaInput.value = '';
    pesoInput.value = '';
}