
document.querySelector('#component_1').onclick = function() {
    document.getElementById("menu_1").style.display = "none";
    document.querySelector('#component_2').style.background = "#FFFFFF";
    document.getElementById("menu_2").style.display = "grid";
    document.querySelector('#component_1').style.background = "grey";
}
document.querySelector('#component_2').onclick = function() {
    document.getElementById("menu_2").style.display = "none";
    document.querySelector('#component_1').style.background = "#FFFFFF";
    document.getElementById("menu_1").style.display = "flex";
    document.querySelector('#component_2').style.background = "grey";
}