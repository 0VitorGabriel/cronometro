const btn_start = document.querySelector('.btn_comecar')

const area_seconds = document.querySelector('.segundos')

const area_minutes = document.querySelector('.minutos')

const area_hours = document.querySelector('.horas')

let seconds = 0
let minutes = 0
let hours = 0

btn_start.addEventListener('click', show_temp)

function show_temp() {
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

    setTimeout('show_temp()', 1000)
}


