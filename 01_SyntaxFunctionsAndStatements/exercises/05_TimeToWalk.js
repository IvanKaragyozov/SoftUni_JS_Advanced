function walking(steps, footprint, speed){

    let distanceMeters = steps * footprint;
    let metersPerSec   = speed / 3.6;
    let time = distanceMeters / metersPerSec;
    let rest = Math.floor(distanceMeters / 500);

    

    //h:m:s
    let timeMin  = Math.floor(time / 60);
    let timeSec  = Math.round(time - (timeMin * 60));
    let timeHour = Math.floor(time / 3600);

    console.log((timeHour < 10 ? '0' : '') + timeHour + ':' +
            (timeMin + rest < 10 ? 'O' : '') + (timeMin + rest) + ':' + (timeSec < 10 ? '0' : '') + timeSec);
}

walking(4000, 0.6, 5);
walking(2564, 0.70, 5.5);