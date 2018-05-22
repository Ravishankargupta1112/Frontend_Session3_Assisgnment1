class Greeter {
    greeting: string;
    finalMessage: String;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        this.finalMessage = "Hello, this is " + this.greeting;
        alert(this.finalMessage);
    }
}

window.onload = () =>
{
    let greeter = new Greeter("Ravi Shankar Gupta");
    greeter.greet();
};