// enum = stores constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous
// numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 2] = "readData";
    requestType[requestType["saveData"] = 3] = "saveData";
    requestType[requestType["deleteData"] = 3] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.readData); // can access constant by dot notation
console.log(requestType["deleteData"]); //by bracket notation
// string enum
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "READ_DATA";
    requestType2["deleteData"] = "DELETE_DATA";
})(requestType2 || (requestType2 = {}));
console.log(requestType2.deleteData);
console.log(requestType2["readData"]);
// heterogenous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "READ_DATA";
    requestType3["deleteData"] = "DEL_DATA";
    requestType3[requestType3["id"] = 101] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3.id);
console.log(requestType3["deleteData"]);
