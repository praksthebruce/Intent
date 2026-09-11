 const questionscreen = document.getElementById("question-screen");
 const taskscreen = document.getElementById("task-screen");
 
 let yesBut = document.getElementById("yes-button");
   let noBut = document.getElementById("no-button");
let startbutton = document.getElementById("start-button");

let taskinput = document.getElementById("task-input");

yesBut.addEventListener("click", () => {
   questionscreen.hidden = true;
   taskscreen.hidden = false;
   taskinput.focus();
})

noBut.addEventListener("click",async() => {
   const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    
if (tabs[0].id) {
    chrome.tabs.remove(tabs[0].id);}
})
startbutton.addEventListener("click", async () => {
    const task = taskinput.value.trim();
    if (!task) {
        taskinput.focus();
        return }
    console.log("Task to be saved:", task);
})