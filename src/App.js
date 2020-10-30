import React from "react";
export default "App"

//задание 1
const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const positive = array.filter(
    function (number)
    {
        if(number > 0){
            return true};
        return false;
    }
)
console.log(positive)

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
    function (item)
    {
        if(item.error === false){
            return false};
        return true;
    }
)
console.log(nmessages)

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




const sendMessage = (number ,first, second) =>{
    return(

       123123123123
    );
    // eslint-disable-next-line no-unreachable
    return (number / 2);

    console.log('intoerwertwertwertcode');

    return second + first;}
sendMessage()


