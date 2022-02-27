function func () {
    console.log("Delet");
    const elements = document.getElementsByClassName('duck');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
document.getElementById('myPopup').addEventListener("click", func); 