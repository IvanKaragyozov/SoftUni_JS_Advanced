function attachEventsListeners() {

    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    daysButton.addEventListener('click', onConvert);
    hoursButton.addEventListener('click', onConvert);
    minutesButton.addEventListener('click', onConvert);
    secondsButton.addEventListener('click', onConvert);

    function convert(value, unit){
        let days = value / ratios[unit];
        return{
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        }
    }

    function onConvert(event){
        let input = event.target.parentElement.querySelector('input[type = "text"]');
        let time = convert(Number(input.value), input.id);

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}
