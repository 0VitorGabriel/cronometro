const btn_start = document.querySelector('.btn_comecar')

const area_seconds = document.querySelector('.segundos')

let seconds = 0

btn_start.addEventListener('click', show_seconds)

function show_seconds() {
    if (seconds == 60) {
        seconds = 0
    } else {
        seconds += 1
        area_seconds.innerHTML = seconds
    
        setTimeout('show_seconds()', 1000)
    }
}


