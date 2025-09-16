// enum = stores constants; duplicate value is not allowed here

// enum types: numeric, string, heterogenous

// numeric enum
enum RequestType {
    readData = 2,
    saveData,  //sequentially it automatically assigns value as 3 if not assigned manually
    deleteData = 3
}

console.log(RequestType);
console.log(RequestType.readData);  // can access constant by dot notation
console.log(RequestType["deleteData"]); //by bracket notation


// string enum
enum RequestType2{
    readData = "READ_DATA",
    deleteData = "DELETE_DATA"
}

console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);


// heterogenous enum
enum RequestType3{
    readData = "READ_DATA",
    deleteData = "DEL_DATA",
    id = 101
}
console.log(RequestType3.id);
console.log(RequestType3["deleteData"])
