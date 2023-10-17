let hr = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

setInterval(()=>{
    let time = new Date();

    hrs12 = (time.getHours()%12) || 12;
    hrs.innerHTML = (hrs12<10?"0":"") + hrs12 ;
    min.innerHTML = (time.getMinutes()<10?"0":"") + time.getMinutes() ;
    sec.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds() ;
}, 1000)

