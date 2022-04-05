window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}
var allapot = true;
function init(){
    var auto = $(".auto")[0];
    var lampa = $(".lampa")[0];
    var piros = $(".piros")[0];
    var sarga = $(".sarga")[0];
    var zold = $(".zold")[0];
    sarga.style.opacity = "20%";
    zold.style.opacity = "20%";
    setInterval( ()=> {
        sarga.style.opacity = "100%";
        zold.style.opacity = "20%";
    }, 2000);

    
    setInterval( ()=> {
        if (allapot) {
            piros.style.opacity = "100%";
            sarga.style.opacity = "20%";
            zold.style.opacity = "20%";
            auto.classList.remove("balroljobbra");
        }else {
            piros.style.opacity = "20%";
            sarga.style.opacity = "20%";
            zold.style.opacity = "100%";
            auto.classList.add("balroljobbra");
        }
        allapot=!allapot
    }, 4000);

}



