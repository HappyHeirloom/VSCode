let words: string[] = []; // empty array

let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("wordInput");

let saveButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("saveButton");
saveButton.addEventListener("click", saveWord);

let showButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showButton");
showButton.addEventListener("click", showWords);

let clearButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clearButton");
clearButton.addEventListener("click", clearWords);

let outputElement: HTMLElement = <HTMLElement>document.getElementById("output");

console.log("Ready");

function showWords(): void {
    if (words.length > 0) {
        outputElement.innerHTML = words.toString();
        outputElement.style.fontStyle = "normal";
    } else {
        outputElement.innerHTML = "empty";
        outputElement.style.fontStyle = "italic";
    }
    console.log("Show");
}

function clearWords(): void {
    words = [];
    outputElement.innerHTML = "";
    console.log("Cleared" + words);
}

function saveWord(): void {
    let word: string = inputElement.value;
    words.push(word);
    console.log("Save word");
    return;
}