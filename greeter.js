var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        this.finalMessage = "Hello, this is " + this.greeting;
        alert(this.finalMessage);
    };
    return Greeter;
}());
window.onload = function () {
    var greeter = new Greeter("Ravi Shankar Gupta");
    greeter.greet();
};
