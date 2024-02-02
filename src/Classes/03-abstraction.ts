abstract class Gadgets {
    gadgetName: string;
    gadgetPrice: number;

    constructor(gadgetName: string, gadgetPrice: number) {
        this.gadgetName = gadgetName;
        this.gadgetPrice = gadgetPrice;
    }
    abstract displayGadget(): void; //abstract class methods don't have body
}

class Phone extends Gadgets{
    phoneProcessor: string;
    
    constructor(gadgetName: string, gadgetPrice: number, phoneProcessor: string){
        super(gadgetName, gadgetPrice);
        this.phoneProcessor = phoneProcessor;
    }
    displayGadget(): void {
        console.log(`Name of Gadget: ${this.gadgetName}\nprice: ${this.gadgetPrice}\nprocessor: ${this.phoneProcessor}`)
    }
}

const phone1 = new Phone("Samsung", 50000, "Snapdragon");
phone1.displayGadget();