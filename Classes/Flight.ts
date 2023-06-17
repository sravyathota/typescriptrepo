interface Flight
{
    flightNumber:any;
    from:string;
    to:string;

    display():void;
}

class Flights implements Flight
{
    flightNumber:any;
    from:string;
    to:string;

    constructor(flightNumber:any,from:string,to:string)
    {
        this.flightNumber=flightNumber;
        this.from=from;
        this.to=to;
    }
    display():void
    {
        console.log(this.flightNumber+" "+this.from+" "+this.to);
    } 
}

var f1=new Flights("6E732","Mumbai","Male");
f1.display();