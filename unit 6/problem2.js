// Create a an Object constructor function called BankAcct with the properties
// acctNum, acctOwner, checkBalance, saveBalance, acctType.
//
// Define a BankAcct.prototype method called checkTransfer() that accepts a amount
// as an argument. The method should check if the amount + checkBalance is greater
// than 0 before setting a new checkBalance amount.
//

function BankAcct(acctNum, acctOwner, checkBalance, saveBalance, acctType) {
  this.acctNum = acctNum;
  this.acctOwner = acctOwner;
  this.checkBalance = checkBalance;
  this.saveBalance = saveBalance;
  this.acctType = acctType;
}

// It's not clear what you want us to reassign checkBalance to.
BankAcct.prototype.checkTransfer = function(amount) {
  if(amount + this.checkBalance > 0) {
    this.checkBalance = amount + this.checkBalance;
  }
}

// acctType should either be "checkign" or "saving", but in this Object constructor,
// we have "checkBalance" and "saveBalance" args which makes it unclear what acctType
// should be
var chase = new BankAcct(1234,"Adrena", 45000, 100000, "Chase");

console.log(chase.checkBalance)
chase.checkTransfer(500);
console.log(chase.checkBalance)
