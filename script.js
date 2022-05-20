function changeSizeByBtn(size) {
    var cont = document.getElementById("container");
    // Set value of the parameter as fontSize
    cont.style.fontSize = size+"px";
}

function changeSizeBySlider() {
    var slider = document.getElementById("slider");
    var cont = document.getElementById("container");
    // Set slider value as fontSize
    cont.style.fontSize = slider.value+"px";
}