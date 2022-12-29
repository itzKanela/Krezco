let panel = document.getElementById("panel");
let btn2 = document.getElementById("btn2");
let btn12 = document.getElementById("btn12");








function redirect(){
    let confirmacion = window.confirm("Estas siendo redireccionado a otro sitio web, quieres continuar?");
    if (confirmacion == true){
        window.location.replace('https://api.whatsapp.com/send?phone=+34642343048&text=Hola,%20estoy%20interesado%20en%20trabajar%20con%20ustedes.');
    } else {
        window.location.reload;
    }
}
document.getElementById("btn1").onclick = function (){
    redirect();
}



function redirect12(){
    let confirmacion = window.confirm("Estas siendo redireccionado a otro sitio web, quieres continuar?");
    if (confirmacion == true){
        window.location.replace('https://forms.gle/yuGVerdNAaJB8rmL9');
    } else {
        window.location.reload;
    }
}
document.getElementById("btn12").onclick = function (){
    redirect12();
}


function panel1(){
    let confirmacion = window.confirm("Estas siendo redireccionado a otro sitio web, quieres continuar?");
    if (confirmacion == true){
        window.location.replace('https://krezco.net/panel/index.php/signin?redirect=https://krezco.net/panel/index.php/dashboard');
    } else {
        window.location.reload;
    }
}
document.getElementById("panel").onclick = function (){
    panel1();
}



