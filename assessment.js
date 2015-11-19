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
    name: 'Targaryen',
    motto: 'Fire and Blood'
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
db.houses.update({name: 'Stark'}, { $push: { person: 'Ned Stark'} });
db.houses.update({name: 'Stark'}, { $push: { person: 'Arya Stark'} });
db.houses.update({name: 'Stark'}, { $push: { person: 'Sansa Stark'} });

db.houses.update({name: 'Targaryen'}, { $push: { person: 'Viserys Targaryen'} });
db.houses.update({name: 'Targaryen'}, { $push: { person: 'Daenerys Targaryen'} });

db.houses.update({name: 'Arryn'}, { $push: { person: 'Jon Arryn'} });


or for multiple entries - source used
//https://docs.mongodb.org/manual/reference/operator/update/push/#up._S_push

db.houses.update(
   { name: 'Stark' },
   {
     $push: {
       people: {
          $each: [ { person: 'Ned Stark' }, { person: 'Arya Stark' }, { person: 'Sansa Stark' } ],
       }
     }
   }
);

db.houses.update(
   { name: 'Targaryen' },
   {
     $push: {
       people: {
          $each: [ { person: 'Viserys Targaryen' }, { person: 'Daenerys Targaryen' } ],
       }
     }
   }
);

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.remove( { motto: 'As High as Honor' } );
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.remove( { name: 'Stark' } );
// your code ends here
 source used for remove - //https://docs.mongodb.org/manual/reference/method/db.collection.remove/

//Do not change anything after this line
db.houses.find().forEach(printjson);
