var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'addressbook'
});

connection.query("select * from AddressBook join Email on Email.entryId=AddressBook.id limit 5;", function(err, rows, fields) {
  // In this callback, rows will be all the rows of the query, in a regular array of regular objects
  // fields is not used very often, but it will contain a listing of the columns with some metadata
  if (err) throw err;
  // Here is an example usage:
     rows.forEach(function(row) {
        console.log("#" + row.id  + " " + row.address);
     });
     connection.end();
  });
  
  
  // This code will output lines like:
  // #1: john@smith.com
  // #2: abc@def.com
  // #5: xx@yy.com
