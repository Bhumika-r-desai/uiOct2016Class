// IIFE CONSTRUCT
(function(){
    var a = 10;
    var name = 'Bhumika';
    var isReading = false;
    var b = null;
    var c;

    function datatypes(){
        var local = 1;

        console.log(local);
    }

    datatypes();

    console.log(a);
    console.log(name);
    console.log(isReading);
    console.log(b);
    console.log(c);

})();

// Named function

function add(x, y){

    return (x + y);
}

console.log(add(3,4));

// Anonymous function

(function(){

    var m = 5;
    var n= 3;
    var p = m - n;

    console.log(p);

}) ();
