var Flights = /** @class */ (function () {
    function Flights(flightNumber, from, to) {
        this.flightNumber = flightNumber;
        this.from = from;
        this.to = to;
    }
    Flights.prototype.display = function () {
        console.log(this.flightNumber + " " + this.from + " " + this.to);
    };
    return Flights;
}());
var f1 = new Flights("6E732", "Mumbai", "Male");
f1.display();
