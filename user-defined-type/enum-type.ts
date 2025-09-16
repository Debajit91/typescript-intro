// enum = stores constants; duplicate value is not allowed here

// enum types: numeric, string, heterogenous

// numeric enum
enum requestType {
    readData = 2,
    saveData,  //sequentially it automatically assigns value as 3 if not assigned manually
    deleteData = 3
}

console.log(requestType);
console.log(requestType.readData);  // can access constant by dot notation
console.log(requestType["deleteData"]); //by bracket notation


// string enum
enum requestType2{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA"
}

console.log(requestType2.deleteData);
console.log(requestType2["readData"]);


// heterogenous enum
enum requestType3{
    readData = "READ_DATA",
    deleteData = "DEL_DATA",
    id = 101
}
console.log(requestType3.id);
console.log(requestType3["deleteData"])
