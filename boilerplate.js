var mysql = require('mysql');

var connection = mysql.createConnection({
 host: process.env.IP,
 user: process.env.C9_USER,
 password: '',
 database: 'addressbook'
});

connection.query("SELECT Account.id AS actId, Account.email AS actEmail, AddressBook.id AS adrId, AddressBook.accountId AS adrActId, AddressBook.name AS adrName, Entry.id AS entId, Entry.addressbookId AS entAdrId, Entry.firstName AS first, Entry.lastName AS last FROM Account JOIN AddressBook ON Account.id=AddressBook.accountId JOIN Entry ON Entry.addressbookId=AddressBook.id limit 1", function(err, rows, fields) {
 if (err) throw err;

 var user = [];


 rows.forEach(function(row) {
     var accObj = {
   accId: "",
   email: "",
   addressBookArr: []
  };
  var addressBookObj = {
   addId: "",
   addName: "",
   entryArr: []
  };
  var entryObj = {
   entryId: "",
   firstName: "",
   lastName: ""
  };

  accObj.accId = row.actId;
  accObj.email = row.actEmail;

  addressBookObj.addId = row.adrId;
  addressBookObj.addName = row.adrName;

  entryObj.entryId = row.entId;
  entryObj.firstName = row.first;
  entryObj.lastName = row.last;

  addressBookObj.entryArr.push(entryObj);
  accObj.addressBookArr.push(addressBookObj);
  user.push(accObj);
  console.log(user);
 });



});