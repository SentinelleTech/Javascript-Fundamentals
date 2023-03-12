//user-defined functions

/*function sayHello(){
    alert("Hello World!");
}

sayHello();*/

//inner variable - belongs to the local scope
/*function showMessage(){
    let jina = "John";

    alert("Hello " + jina + ", nice to meet you");

}

showMessage();*/

//outer variable - global scope

/*let jinaLangu = "John Kinyanjui";

function showMessage2(){

    jinaLangu = "Bob";

    let message = "Jambo " + jinaLangu;

    alert(message);

}

alert(jinaLangu);

showMessage2();

alert(jinaLangu);*/



function gradeTheStudent(alama){

    if(alama >= 80 && alama <= 99){
        alert("You scored grade A");
    }else if(alama >= 60 && alama <= 79){
        alert("You scored grade B");
    }else if(alama >= 40 && alama <= 59){
        alert("You scored grade C");
    }else if(alama >= 20 && alama <= 39){
        alert("You scored grade D");
    }else if(alama >= 1 && alama <= 19){
        alert("You scored grade E and you have failed");
    }else{
        alert("Invalid score");
    }

}


let score = prompt('Please enter your score', '');

gradeTheStudent(score);

