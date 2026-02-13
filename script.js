const password = "hrishikesh";

function checkPassword(){

let input = document.getElementById("passwordInput").value;

if(input === password){

document.getElementById("lockScreen").style.display = "none";

document.getElementById("mainContent").style.display = "block";

typeWriter();

}
else{
document.getElementById("error").innerHTML = "Wrong password";
}

}

const text = "I miss you every day, and distance has never changed what you mean to me.";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typeText").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter, 50);

}

}

function reveal(){

document.getElementById("hiddenMessage").style.display = "block";

}
