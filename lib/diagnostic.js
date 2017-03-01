'use strict';
// Assessment: An Introduction to MongoDB

// do not change anything between here and question 1
let db = new Mongo().getDB('westeros');
db.dropDatabase();

// Question 1
//
// Create a collection called houses, and insert the following houses,
// with name and motto fields:
//
// House Arryn, motto 'As High as Honor'
// House Stark, motto 'Winter is Coming'
// House Targaryen, motto 'Fire and Blood'

// your code begins here

db.createCollection('houses', { name: 'Arryn', motto: 'As High as Honor'  }, { house: 'stark',  motto: 'Winter is Coming' }, { house: 'Targaryen', motto: 'Fire and Blood' } );
// your code ends here


// Question 2
//
// Using update at least once and $push at least once, add the following people
// to the respective houses in a "members" array.
//
// Ned Stark
// Arya Stark
// Sansa Stark
// Viserys Targaryen
// Daenerys Targaryen
// Jon Arryn

// your code begins here
db.houses.update({house: 'Stark'},
 {$set: {"member": "Ned Stark"}}, {multi: true});
 db.houses.update({house: 'Stark'},
  {$set: {"member": "Arya Stark"}}, {multi: true});
  db.houses.update({house: 'Stark'},
   {$set: {"member": "Sansa Stark"}}, {multi: true});
   db.houses.update({house: 'Targaryen'},
    {$set: {"member": "Viserys Targeryan"}}, {multi: true});
    db.houses.update({house: 'Targaryen'},
     {$set: {"member": "Daenerys Targeryan"}}, {multi: true});
     db.houses.update({house: 'Aryn'},
      {$set: {"member": "John Aryn"}}, {multi: true});
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.deleteOne({ motto: 'As High as Honor'});

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.deleteMany({ motto: 'Winter is Coming' });

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
