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

    seconds++

    if (seconds == 60) {
        minutes++
        seconds = 0
    }


    if (minutes == 60) {
        hours++
        minutes = 0
    }

    area_seconds.textContent = formatTime(seconds)
    area_minutes.textContent = formatTime(minutes)
    area_hours.textContent = formatTime(hours)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

btn_restart.addEventListener('click', () => {
    clearInterval(interval)
    seconds = 0 
    minutes = 0
    hours = 0

    area_seconds.textContent = seconds
    area_minutes.textContent = minutes
    area_hours.textContent = hours

    btn_start.classList.remove('remove_btn')

    btn_restart.classList.remove('show_btn')

    btn_pause.classList.remove('show_btn')
}) 

btn_pause.addEventListener('click', () => {
    clearInterval(interval)
})