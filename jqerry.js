var password = "VITCW123"
var username = "VITCYBERWARRIORS"
var response_pass;
var response_user

while(response_pass != password && response_user != username){
    response_user = window.prompt("Enter the user")
    response_pass = window.prompt("Enter the password")
}
alert("you got it");