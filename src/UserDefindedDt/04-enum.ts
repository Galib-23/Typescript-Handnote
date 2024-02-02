// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric

enum requestType {
    readData,
    saveData,
    deleteData,
}
console.log(requestType)

enum requestType2 {
    readData2 = 3,
    saveData2,
    deleteData2,
}
console.log(requestType2)

enum requestType3 {
    readData3 = 3,
    saveData3 = 6,
    deleteData3 = 2,
}
console.log(requestType3)