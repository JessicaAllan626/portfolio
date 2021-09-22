console.log('Hello World!');

let weather = 60;
if (weather < 65) {
    console.log('wear a jacket');

}

for (let j = 0; j <5; j++){
    console.log(j + "");
}

let count = 0
for ( ; count <9; ++count){
    console.log(count);
}

blah = function(){
    return localStorage;
    lala= "hi";
};
console.log(blah());

function sum(a, b){
    return a+b;
}
console.log(sum(1, 2, 3, 4));

function foo(){
    return bar();
    function bar(){
        return "PB";
    }
}
console.log(foo());