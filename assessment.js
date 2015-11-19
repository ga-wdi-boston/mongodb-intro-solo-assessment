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
    motto: 'Winter is coming'
  },
  {
    name: 'Targaryen',
    motto: 'Fire and Blood'
  }
]);


// your code ends here


// Question 2
//
// Using update and $push, add the following people to the
// respective houses
//
// Ned Stark
// Arya Stark
// Sansa Stark
// Viserys Targaryen
// Daenerys Targaryen
// Jon Arryn

// your code begins here

db.houses.update({'name': 'Stark'},
  { $push : { people : [{ surname : 'Ned', given_name : 'Stark' },
                       { surname : 'Arya', given_name : 'Stark' },
                       { surname : 'Sansa', given_name : 'Stark' }] } });

db.houses.update({'name': 'Targaryen'},
  { $push : { people : [{ surname : 'Viserys', given_name : 'Targaryen' },
                       { surname : 'Daenerys', given_name : 'Targaryen' }] } });

db.houses.update({'name': 'Arryn'},
  { $push : { people : { surname : 'Jon', given_name : 'Arryn' } } });

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update({'name': 'Arryn'}, {$unset: {motto: ""}}, {multi: true});


// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.remove({'name': 'Stark'});


// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
