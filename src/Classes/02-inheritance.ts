class Vehicle {
    vehicleName: string;
    vehiclePrice: number;

    constructor(vehicleName: string, vehiclePrice: number){
        this.vehicleName = vehicleName;
        this.vehiclePrice = vehiclePrice;
    }
    displayVehicle(): void{
        console.log(`vname: ${this.vehicleName}, vprice: ${this.vehiclePrice}`)
    }
}

class Motobike extends Vehicle{
    bikeMilage: number;

    constructor(vehicleName: string, vehiclePrice: number, bikeMilage: number){
        super(vehicleName, vehiclePrice);
        this.bikeMilage = bikeMilage;
    }
    displayBike(): void{
        console.log(`vname: ${this.vehicleName}, vprice: ${this.vehiclePrice}, bikeMilage: ${this.bikeMilage}`)
    }
}

let bike1 = new Motobike("Yamaha", 40000, 45);
bike1.displayBike();

