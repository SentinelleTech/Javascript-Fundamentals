const correct_username = 'John';
const correct_password = 1234;

function validation(user, pass){
    if(user === correct_username && pass === correct_password){
        return true;
    }else{
        return false;
    }
}