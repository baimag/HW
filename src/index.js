import ReactDOM from "react-dom";
import React from "react";
import App from "./App"


//ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ ДЗ



//задание 1
const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const positive = array.filter(
    function (number) {
        if (number > 0) {
            return true
        }
        ;
        return false;
    }
)


//задание 2
const messages = [
    {message: 'hello', error: true},
    {message: 'javascript', error: false},
    {message: 'intocode', error: true},
    {message: 'react', error: true},
    {message: 'angular', error: false},
    {message: 'es6', error: false},
];
const nmessages = messages.filter(
    function (item) {
        if (item.error === false) {
            return false
        }
        ;
        return true;
    }
)


//задание 3
const  words = ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
const words2 = words.map(function(e) {
        if (e.length < 5) {
            return '*'
        }
        return e
    }
);



//задание 4


 const sendMessage = (message = 10) => {
        if(message.length > 999){
           return ("длинное сооб")
        }
    return ("норм")
}


 const half = (number) => {
     return number / 2;
 }


 const showConsole = () => {
     console.log("intocode")
 }


const contacWords = (first, second) => {
     return  first + second;
}

function justText(){
     return "intocode";
}

function logging(text="text"){
     console.log(text)
}

function add(x = 2,y= 3){
     const z = 3;
     return z * x * y;
}

function onlyPositive(number= 10 ){
     if (number < 0){
         return false;
     }
     return true
}

ReactDOM.render(

    <App/>,
    document.getElementById("root")
)