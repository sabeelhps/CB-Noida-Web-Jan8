// Immediately invoked function expression


function add() {
    var a = 100;
    var b = 200;
    var c = a + b;
    console.log(c);
}

add();

(function () {
    var a = 100;
    var b = 200;
    var c = a + b;
    console.log(c);
})()

