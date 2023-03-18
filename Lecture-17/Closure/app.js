
function fun() {
    var a = 100;
    
    function innerFun() {
        a++;
        console.log(a);
    }
    
    return innerFun;
}

var f = fun();
f();
f();
f();
f();

// var f1 = fun();

// f1();
// f1();
// f1();
// f1();
