// access modifiers: public, private, protected, readonly
class Tree {
    public treeName: string; 
    protected treeAge: number;  //Protected can be inherited but its value can't be changed outside the class
    private treeHeight!: number; // optional chaining denotes it's value will be assigned somewhere later and must assigned .

    constructor(treeName: string, treeAge: number){
        this.treeName = treeName;
        this.treeAge = treeAge;
    }
    display(): void{
        console.log(this.treeAge, this.treeName)
    }
    setTreeHeight(treeHeight: number): void{ // this is a public functions used to set value of a private member
        this.treeHeight = treeHeight;
    }
    getTreeHeight(): number{
        return this.treeHeight;
    }
}

let tree1 = new Tree("Neem", 500);
tree1.treeName = "Neeeeem";
tree1.setTreeHeight(30);
console.log(tree1.getTreeHeight())