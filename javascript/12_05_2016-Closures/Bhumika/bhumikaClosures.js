// IIFE Construct
(function(){

        // total
        function Total(){
            var total = this;
            // mathematics
            function Mathematics(){
                var math = this;
                math.sum = function () {
                    return (a + b);
                }
                math.difference = function () {
                    return (a - b);
                }
                math.multiply = function () {
                    return (a * b);
                }
                math.divide = function () {
                    return (a / b);
                }

            }

            var maths = new Mathematics( 20, 15);

            total.add = maths.sum();
            total.substract = maths.difference();
            total.multiplication = maths.multiply();
            total.division = maths.divide();

            var result = new total;
            
        }

}) ();
