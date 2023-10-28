// Código del juego

let contadorIntentos = 0;

const emojis = ["😍", "😍", "😎", "😎", "🥸", "🥸", "🥰", "🥰", "🤩", "🤩", "🥶", "🥶", "👻", "👻", "😡", "😡"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
var gameCompleted = false;

for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]

    box.onclick = function () {
        if (!gameCompleted) {
            this.classList.add('boxOpen')
            setTimeout(function () {
                if (document.querySelectorAll('.boxOpen').length > 1) {
                    contadorIntentos++;
                    document.querySelector('h3').innerText = 'Intentos: ' + contadorIntentos;

                    if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                        if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                            gameCompleted = true;
                            alert('¡Lo completaste, felicidades!')
                            alert('N°. de intentos: ' + contadorIntentos)
                        }
                    } else {
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                    }
                }
            }, 500)
        }
    }
    document.querySelector('.game').appendChild(box);
}

function resetGame() {
    location.reload();
}

// Cambio de colores
let mode = document.querySelector('.mode');
let powerOff = document.querySelector('.powerOff');

powerOff.onclick = function () {
    mode.classList.toggle('active')
}