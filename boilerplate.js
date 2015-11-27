
var mysql = require('mysql');

var connection = mysql.createConnection({
 host     : process.env.IP,
 user     : process.env.C9_USER,
 password : '',
 database : 'addressbook'
});

connection.query("SELECT Account.id AS actId, Account.email AS actEmail, AddressBook.id AS adrId, AddressBook.accountId AS adrActId, AddressBook.name AS adrName, Entry.id AS entId, Entry.addressbookId AS entAdrId, Entry.firstName AS first, Entry.lastName AS last FROM Account JOIN AddressBook ON Account.id=AddressBook.accountId JOIN Entry ON Entry.addressbookId=AddressBook.id", function(err, rows, fields) {
 if(err) throw err;
 console.log(rows);

 forEach(function(row){
  
 });

 

 });