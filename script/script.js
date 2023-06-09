// botões

const btn_start = document.querySelector('.btn_start')

const btn_restart = document.querySelector('.btn_restart')

const btn_pause = document.querySelector('.btn_pause')

const btn_back = document.querySelector('.btn_back')

// divs para mostrar o tempo

const area_seconds = document.querySelector('.seconds')

const area_minutes = document.querySelector('.minutes')

const area_miliseconds = document.querySelector('.miliseconds')

let seconds = 0
let minutes = 0
let miliSeconds = 0

btn_start.addEventListener('click', start)

let interval

function start() {
    btn_start.style.display = 'none'
    btn_back.style.display = 'none'
    btn_pause.style.display = 'inline'
    btn_restart.style.display = 'inline'

    show_temp()
    interval = setInterval('show_temp()', 12)
}

function show_temp() {
    miliSeconds++

    if (miliSeconds == 100) {
        seconds++
        miliSeconds = 0
    }

    if (seconds == 60) {
        minutes++
        seconds = 0
    }

    area_seconds.textContent = formatTime(seconds)
    area_minutes.textContent = formatTime(minutes)
    area_miliseconds.textContent = formatTimeMiliSeconds(miliSeconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}  :`) : (`${time}  :`)
}

function formatTimeMiliSeconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

btn_restart.addEventListener('click', () => {
    clearInterval(interval)
    seconds = 0
    minutes = 0
    miliSeconds = 0

    area_seconds.textContent = formatTime(seconds)
    area_minutes.textContent = formatTime(minutes)
    area_miliseconds.textContent = formatTimeMiliSeconds(miliSeconds)

    btn_pause.style.display = 'none'
    btn_back.style.display = 'none'
    btn_start.style.display = 'inline'
    btn_restart.style.display = 'none'
}) 

btn_pause.addEventListener('click', () => {
    clearInterval(interval)

    btn_back.style.display = 'inline'
    btn_pause.style.display = 'none'
})

btn_back.addEventListener('click', () => {
    start()

    btn_back.style.display = 'none'
    btn_pause.style.display = 'inline'
})