// JavaScript source code
var correct=0;
var wrong=0; 


for (counter=1; counter <= 3; counter++) {
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 9) + 1;
    var question = window.prompt("What's the answer of " + num1 + " + " + num2 + "?");

    if (question == num1 + num2) {
        ++correct;
    }
    else {
        ++wrong
    }
}

document.writeln(
    '<div class="welcome-container">' +
    '<h1><br /> You got ' + correct + ' correct and ' + wrong + ' wrong answers </h1>' +
    '<figure class="welcome-figure">' +
    '<img src="quizPhoto.png" width="600" height="600" alt="profile picture">' +
    '<figcaption class="p2"><em><br />"Learning is not about perfection, it is  about progress."</em></figcaption>' +
    '</figure>' +
    '</div>'
);