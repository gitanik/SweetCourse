$(document).ready(function(){
	
$(".clients").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});
// Current day of the week
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is: " + daylist[day]+ ".");


//Current time
timer();
function timer() {
var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

document.getElementById("demo").innerHTML = "Current time: "+hour + ":" + minute + ":" + second;
setTimeout(timer,1000);
}
//Curent date
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) {
	mm="0"+mm;
}

today = dd + "/" + mm + "/" + yyyy;
console.log(today);
document.getElementById("demo1").innerHTML = "Today is: "+dd + "/" + mm + "/" + yyyy;

});
// Printing the content of the page
function print_current_page() {
	window.print();
}


