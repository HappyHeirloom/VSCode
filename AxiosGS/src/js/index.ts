import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

let getRequest1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getRequest1");
getRequest1.addEventListener("click", performGetRequest1);

let getRequest2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getRequest2");
getRequest2.addEventListener("click", performGetRequest2);

let post: HTMLFormElement = <HTMLFormElement>document.getElementById("post");
post.addEventListener("submit", performPostRequest);

let clear: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clear");
clear.addEventListener("click", clearResult);
let clear1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clear1");
clear1.addEventListener("click", clearResult);
let clear2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("clear2");
clear2.addEventListener("click", clearResult);


function clearResult(): void{
    let resultElement: HTMLDivElement = <HTMLDivElement>document.getElementById('getResult1')
    let resultElement2: HTMLDivElement = <HTMLDivElement>document.getElementById('getResult2')
    let resultElementPost: HTMLDivElement = <HTMLDivElement>document.getElementById('postResult')

    resultElement.innerHTML = '';
    resultElement2.innerHTML = '';
    resultElementPost.innerHTML = '';
}




function performGetRequest1():void{
let resultElement : HTMLDivElement = <HTMLDivElement>document.getElementById('getResult1');
resultElement.innerHTML = '';

axios.get('https://jsonplaceholder.typicode.com/todos')
.then(function (response: AxiosResponse): void{
    resultElement.innerHTML = JSON.stringify(response.data);
})
.catch(function (error : AxiosError): void{
    resultElement.innerHTML = error.message;
})
}

function performGetRequest2(): void{
let resultElement : HTMLDivElement = <HTMLDivElement>document.getElementById('getResult2');
resultElement.innerHTML = '';
let todoId : HTMLInputElement = <HTMLInputElement>document.getElementById('todoId');
let todoIdValue = todoId.value;

axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
        id: todoIdValue
    }
    })
.then(function (response: AxiosResponse): void{
resultElement.innerHTML = JSON.stringify(response.data);
})
.catch(function (error : AxiosError): void{
    resultElement.innerHTML = error.message;
})
}

function performPostRequest(): void{
    let resultElement : HTMLDivElement = <HTMLDivElement>document.getElementById('postResult');
    let todoTitle: HTMLInputElement = <HTMLInputElement>document.getElementById('todoTitle');
    resultElement.innerHTML = '';
    let todoTitleValue = todoTitle.value;

    axios.post('https://jsonplaceholder.typicode.com/todos', {
        userId: '1',
        title: todoTitleValue,
        completed: false
    })
    .then(function (response: AxiosResponse): void{
        resultElement.innerHTML = JSON.stringify(response.data);
    })
    .catch(function (error : AxiosError): void{
        resultElement.innerHTML = error.message;
    })
}