const password = "hrishikesh";

function checkPassword(){

let input = document.getElementById("passwordInput").value;

if(input === password){

document.getElementById("lockScreen").style.display = "none";

document.getElementById("mainContent").style.display = "block";

}
else{
document.getElementById("error").innerHTML = "Wrong password";
}

}

function reveal(){

document.getElementById("hiddenMessage").style.display = "block";

}
