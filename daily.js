var date= new Date();
console.log(date);

var currentMonth=date.getMonth();
var currentDay= date.getDay();
var currentDate = date.getDate();
var currentYear = date.getFullYear();

console.log(currentMonth);
console.log(currentDay);
console.log(currentDate);
console.log(currentYear);

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var title = document.getElementById("title");
title.innerHTML=months[currentMonth];

var habittitle = document.getElementById("habittitle");
habittitle.addEventListener("click", () => {
    let habits = prompt("What's your habit", habittitle.innerHTML)
    if(habits.length==0){
        habittitle.innerHTML="Click to set your habit";
    }else{
        habittitle.innerHTML = habits;
    }
});

var daysInTheMonthList = [31,28,31,30,31,30,31,31,30,31,30,31];
var daysInThisMonth = daysInTheMonthList[currentMonth];
var dayCompleted = 0;
var totaldays = document.getElementById("totalDays");

var dayCount=0;
var rowCount=0;
var days = document.getElementsByClassName("days");
for(var i=0; i<days.length; i++){
    var day = days[rowCount].getElementsByClassName("day");
    for(var j=0; j<day.length;j++){
        if(dayCount==currentDate -1){
            day[j].setAttribute("style","border:2px solid black");
        }
    }
}