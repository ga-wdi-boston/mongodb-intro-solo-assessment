// Assessment: An Introduction to MongoDB

// do not change anything between here and question 1

var db = new Mongo().getDB('westeros');
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
db.houses.insert([
  {
  name: 'Arryn',
  motto: 'As High as Honor'
  },
  {
    name: 'Stark',
    motto: 'Winter is Coming'
  },
  {
    name: 'Targaryen',
    motto: 'Fire and Blood'
  }
]
);
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

db.houses.update(
  {"name":"Stark"},
  {$set:{
    "people": [ 'Ned Stark', 'Arya Stark']
  }}
);

db.houses.update(
  {"name":"Targaryen"},
  {$set:{
    "people": [ 'Viserys Targaryen', 'Daenerys Targaryen']
  }}
);

db.houses.update(
  {"name":"Arryn"},
  {$push:{
    "people": 'Jon Arryn'
  }}
);

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update(
  {"name":"Arryn"},
  {$unset:{
    "motto":""
  }}
);

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.remove({"name":"Stark"});
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
