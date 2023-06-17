var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.flightNo = flightNo;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.flightNo);
    };
    return Passenger;
}());
var p1 = new Passenger("Nick", "Jonas", 12345);
var p2 = new Passenger("Harry", "Styles", 54321);
p1.display();
p2.display();
