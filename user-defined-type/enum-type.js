// enum = stores constants; duplicate value is not allowed here
// enum types: numeric, string, heterogenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 2] = "readData";
    RequestType[RequestType["saveData"] = 3] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.readData); // can access constant by dot notation
console.log(RequestType["deleteData"]); //by bracket notation
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType2.deleteData);
console.log(RequestType2["readData"]);
// heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DEL_DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
console.log(RequestType3["deleteData"]);
