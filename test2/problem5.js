// Create a an Object constructor function called MedRecord with the properties
// firstName, lastName, medRecord, medID, insuranceInfo.
//
// Define a MedRecord prototype method called changeInsurance() that accepts
// // the name of a patient new insurance information and update object
// insuranceInfo
// // property.
//
function MedRecord (firstName, lastName, medRecord, medID, insuranceInfo) {
  this.firstName = firstName; //assigning first to this.firstName
  this.lastName = lastName; // assigning properties to MedRecord
  this.medRecord = medRecord;
  this.medID = medID;
  this.insuranceInfo = insuranceInfo;
}
//prototype is a special type of object that will assign new instances of data
// to when MedRecord is called. When you are outside of the function you assign
// a (the name of the function goes here =>)function.prototype instead of "this"
MedRecord.prototype.changeInsurance = function(info) {
   this.insuranceInfo = info; //this is the instance of record. This is also
  // reassigning this.insuranceInfo value.
};

var adrenasRecord = new Medrecord("Adrena", "Oushana", 1, 539, "Blue Cross");
// when you say new Medrecord it gives you new value of "this", a new set of
// properties, a new Medrecord

adrenasRecord.changeInsurance("Anthem");

//you can assign properties to functions
