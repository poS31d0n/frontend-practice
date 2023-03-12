
document.querySelector("#button_to_grid").onclick = () => {
    document.querySelector("#button_to_grid").style.backgroundColor = "grey"
    document.querySelector("#button_to_flex").style.backgroundColor = "white"
}

document.querySelector("#button_to_flex").onclick = () => {
    document.querySelector("#button_to_flex").style.backgroundColor = "grey"
    document.querySelector("#button_to_grid").style.backgroundColor = "white"
}