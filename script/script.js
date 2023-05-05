// botões

const btn_start = document.querySelector('.btn_comecar')

const btn_restart = document.querySelector('.btn_reiniciar')

const btn_pause = document.querySelector('.btn_pausar')

// divs para mostrar o tempo

const area_seconds = document.querySelector('.segundos')

const area_minutes = document.querySelector('.minutos')

const area_hours = document.querySelector('.horas')

let seconds = 0
let minutes = 0
let hours = 0

btn_start.addEventListener('click', start)

let interval

function start() {
    show_temp()
    interval = setInterval('show_temp()', 1000)
}

function show_temp() {
    btn_start.classList.add('remove_btn')

    btn_restart.classList.add('show_btn')

    btn_pause.classList.add('show_btn')

    if (seconds == 59) {
        seconds = 0

        if (minutes == 59) {
            minutes = 0
            hours += 1

            area_hours.innerHTML = hours

            area_minutes.innerHTML = minutes
        } else {

            minutes += 1 

            area_minutes.innerHTML = minutes
        }
    } 

    seconds += 1
    area_seconds.innerHTML = seconds
}


btn_restart.addEventListener('click', () => {
    clearInterval(interval)
    seconds = 0 
    minutes = 0
    hours = 0

    area_seconds.innerHTML = seconds
    area_minutes.innerHTML = minutes
    area_hours.innerHTML = hours

    btn_start.classList.remove('remove_btn')

    btn_restart.classList.remove('show_btn')

    btn_pause.classList.remove('show_btn')
}) 

btn_pause.addEventListener('click', () => {
    clearInterval(interval)
})