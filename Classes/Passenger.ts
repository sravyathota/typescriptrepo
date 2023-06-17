class Passenger
{
    firstName:string;
    lastName:string;
    flightNo:number;

constructor(firstName:string,lastName:string,flightNo:number)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.flightNo=flightNo;
}

display()
{
    console.log(this.firstName+" "+this.lastName+" "+this.flightNo);
}
}
var p1=new Passenger("Nick","Jonas",12345);
var p2=new Passenger("Harry","Styles",54321);
p1.display();
p2.display();