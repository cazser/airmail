let writeButton = document.getElementById("writeButton")
let receiveButton = document.getElementById("receiveButton")
let sendButton = document.getElementById("sendButton")
let paperButton = document.getElementById("paperButton")

let writeContent = document.getElementById("writeContent")
let receiveContent = document.getElementById("receiveContent")
let sendContent = document.getElementById("sendContent")
let paperContent = document.getElementById("paperContent")

writeButton.onclick=()=>{
    writeContent.style.display="flex";
    receiveContent.style.display="none";
    sendContent.style.display="none";
    paperContent.style.display="none";

}
receiveButton.onclick=()=>{
    writeContent.style.display="none";
    receiveContent.style.display="block";
    sendContent.style.display="none";
    paperContent.style.display="none";

}
sendButton.onclick=()=>{
    writeContent.style.display="none";
    receiveContent.style.display="none";
    sendContent.style.display="block";
    paperContent.style.display="none";
}
paperButton.onclick=()=>{
    writeContent.style.display="none";
    receiveContent.style.display="none";
    sendContent.style.display="none";
    paperContent.style.display="block";

}