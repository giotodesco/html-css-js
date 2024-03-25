const hor =document.getElementById("hora")
const min =document.getElementById("minuto")
const sec =document.getElementById("segundo")

const relogio = setInterval(function time() {
    let dataToday = new Date();
    let hr= dataToday.getHours()
    let mins= dataToday.getMinutes()
    let secu= dataToday.getSeconds()

    if (hr < 10) {
        hr ='0' + hr;
    }
    if (mins < 10) {
        mins ='0' + mins;
    }
    if (secu < 10) {
        secu ='0' + secu;
    }

    hor.textContent = hr;
    min.textContent = mins;
    sec.textContent = secu;
})

const dark_color = ['#ececde', '#000000']
const light_color = ['#000000', '#ececde']
document.getElementById('negra').addEventListener('click', function() {
    if(this.checked) {
        document.body.style.setProperty
        ('--primarys', dark_color[0])
       document.body.style.setProperty
       ('--secundarys', dark_color[1])
    } else {
       document.body.style.setProperty('--primarys', light_color[1])
       document.body.style.setProperty('--secundarys', light_color[0])
    }
})
