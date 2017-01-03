/*
/!**
 * Created by bhumi on 12/30/2016.
 *!/

function practice() {

    /!*var test = 10;

    function add() {
        this.test2 = 20;

        this.output = function () {
            return (test + this.test2);
        }
    }
        var result =  new add();
        console.log(result.output());

    console.log(test);*!/

    var test = this;

    test.a = 5;
    test.b = 10;
    test.c =  test.a + test.b;

    function sum() {

        var view = this;
        view.output = test.a * test.b;
    }
    var view1 = new sum();
    test.result = view1.output;
}

var view2 = new practice();
console.log(view2);
//console.log(view1.result);

//console.log(view.a);
//console.log(test.c);

//sum();*/

(function () {

    function Total() {

        var tot = this;

        function Mathematics(num1, num2) {

            var math = this;

            math.sum = function () {
                return num1 + num2;
            }
            math.diff = function () {
                return num1 - num2;
            }
            math.product = function () {
                return num1 * num2;
            }
            math.division = function () {
                return num1 / num2;
            }
        }

            var operations = new Mathematics(20, 10);

            tot.sum = operations.sum();
            tot.diff = operations.diff();
            tot.product = operations.product();
            tot.division = operations.division();

    }

        var result = new Total();
        console.log(result);

})();