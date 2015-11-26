var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.IP,
  user: process.env.C9_USER,
  password: '',
  database: 'addressbook'
});

connection.query("select Account.id as ActId, AddressBook.accountId as AdsId, Account.email as AccountEmail, AddressBook.name as AddressBookName FROM Account join AddressBook on Account.id=AddressBook.accountId", function(err, rows, fields) {
  // In this callback, rows will be all the rows of the query, in a regular array of regular objects
  // fields is not used very often, but it will contain a listing of the columns with some metadata
  if (err) throw err;
  // Here is an example usage:
  var user = [];
  for (var i = 0; i < rows.length; i++) {
    var counter = 0;
    var obj = {
      arr: []
    };
    var currentIndex;
    for (var j = 0; j < user.length; j++) {
      if (user[j].ActId === rows[i].ActId) {
        counter++
        currentIndex = j;
      }
    }
    if (counter < 1) {
      obj.ActId = rows[i].ActId;
      obj.Email = rows[i].AccountEmail;
      obj.arr.push(rows[i].AddressBookName);
      user.push(obj);
    }
    else {
      user[currentIndex].arr.push(rows[i].AddressBookName);
    }

  }
  for (var k = 0; k < user.length; k++) {
    console.log("-------------");
    console.log(user[k].Email)
    console.log(user[k].arr.join(", "));
  }
  // This code will output lines like:
  // #1: john@smith.com
  // #2: abc@def.com
  // #5: xx@yy.com

  // Note that IDs do not have to be contiguous. If we DELETE rows, there will be holes in the ID list. This is normal.
});
