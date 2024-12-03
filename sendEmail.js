const form = document.getElementById('form_contacto');
const sendMail = document.getElementById('emailA');

function handleSendEmail(event){
    event.preventDefault()
    const fd = new FormData(this)
    const asuntoEstatico = "Formulario de Consultas";

    sendMail.setAttribute(
        'href',
        `mailTo:szeballos@alumnos.unsada.edu.ar?subject=${asuntoEstatico}&body=${fd.get(
            'message'
        )}`
    )

    sendMail.click()
}

form.addEventListener('submit', handleSendEmail);