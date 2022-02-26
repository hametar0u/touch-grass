document.getElementById("touchGrassButton").addEventListener("click", touchgrass);

function touchgrass() {
    let div = document.createElement("div");
    div.id = "touchgrass";
    div.style.cssText = 'position:absolute;width:100%;height:100%;-moz-border-radius:100px;border:1px  solid #ddd;-moz-box-shadow: 0px 0px 8px  #fff;';
    let text = document.createElement("h1");
    text.append("touch grass")
    div.append(text);
    document.getElementById("body").appendChild(div);
}