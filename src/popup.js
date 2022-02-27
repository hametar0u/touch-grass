function func () {
    console.log("Delet");
    chrome.runtime.sendMessage('stop-spawn', () => {
        console.log("attempting to contact goose control...");
    });
}
document.getElementById('myPopup').addEventListener("click", func); 