// We will write a program to grade someone's score
let score = prompt("Please enter your score", "");

    if(score >= 80 && score <= 99){
        alert("You scored grade A");
    }else if(score >= 60 && score <= 79){
        alert("You scored grade B");
    }else if(score >= 40 && score <= 59){
        alert("You scored grade C");
    }else if(score >= 20 && score <= 39){
        alert("You scored grade D");
    }else if(score >= 1 && score <= 19){
        alert("You scored grade E and you have failed");
    }else{
        alert("Invalid score");
    }