// JavaScript source code
var name;
var now = new Date();
var hour = now.getHours();
name = window.prompt("please enter your name");
var greeting;
if (hour < 12) {
    greeting = "Good Morning, ";

}
 else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon, ";
}
else { 
    greeting = "Good Evening, ";
}

document.getElementById("greeting-message").innerHTML =
    "<br>" + greeting + name + ", Welcome to Fatimah's Website!";