class Animal {
    animalName: string;
    animalAge: number;

    constructor(animalName: string, animalAge: number) {
        this.animalName = animalName;
        this.animalAge = animalAge;
    }
    displayAnimal(): void{
        console.log(`animalName: ${this.animalName}, animalAge: ${this.animalAge}`)
    }
}
