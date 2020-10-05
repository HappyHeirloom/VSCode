let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("result");

let output: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result-span");


function stringManipulation(): void{
    let operationElement: HTMLSelectElement = <HTMLSelectElement>document.getElementById("manipulation-type");
    let operatorString: string = operationElement.value;

    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("input");

    let inputElementString: string = inputElement.value;

    stringManipulationCalculation(operatorString, inputElementString);


}

function stringManipulationCalculation(operation: string, input: string): string{
    let result: string;
    result = input;
    switch(operation){
        case "To upper case":
            output.innerHTML = result.toUpperCase();
            break;
        
        case "To lower case":
            output.innerHTML = result.toLowerCase();
            break;

        case "Split by space":
            let resultArray: Array<string> = result.split(" ");
            output.innerHTML = resultArray.toString();
            break;

        case "Remove space":
             let resultArrayNoSpace: Array<string> = result.split(" ");
            output.innerHTML = resultArrayNoSpace.join("").toString();
            break;
    }

    return "";
}

buttonElement.addEventListener("click", stringManipulation);