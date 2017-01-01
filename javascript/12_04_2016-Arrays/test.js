/**
 * Created by bhumi on 12/30/2016.
 */
(function () {

    var test = 10;

    function closures(){
        var test = 20;
        var sample = this;

        console.log(test);

    }

    closures();

    console.log(test);
})();