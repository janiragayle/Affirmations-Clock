/*-----------Affirmations------------*/
const angelNumbers = ["111", "222", "333", "444", "555", "666", "777", "888", "999", "1010", "1111", "1212"];

const ones = ""; //1:11
const twos = ""; //2:22
const threes = ""; //3:33
const fours = ""; //4:44
const fives = ""; //5:55
const sixies = ""; //6:66
const sevens = ""; //7:77
const eights = ""; //8:88
const nines = ""; //9:99
const tens = "";  //10:10
const elevens = ""; //11:11
const twelves = ""; //12:12

/*------------Clock-------------*/
let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

//Boolean displayed = false;
setInterval(()=>{
    let time = new Date();

    var hrs12 = (time.getHours()%12) || 12;
    hrs.innerHTML = (hrs12<10?"0":"") + hrs12 ;

    var minutes = time.getMinutes();
    min.innerHTML = (minutes<10?"0":"") + minutes ;

    sec.innerHTML = (time.getSeconds()<10?"0":"") + time.getSeconds() ;


   /* var currentTime = hrs12.toString() + minutes.toString();
    console.log(currentTime);*/
    var currentTime = "444";

    if (angelNumbers.includes(currentTime)) {
        //var answer = confirm("The clock hit the angel number " + currentTime + ". Would you like to know the meaning?");
        
        if (true){
            defElements = document.getElementById("text");
            defElements.innerHTML = "444 means blah blah blah";
        }  
    }

}, 1000)




