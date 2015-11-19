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
    name: 'House Arryn',
    motto: 'As High as Honor'
  },
  {
    name: 'House Stark',
    motto: 'Winter is Coming'
  },
  {
    name: 'House Targaryen',
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

//Starks
db.houses.update({"_id" : ObjectId("564ddca3a53b642b12d8e383")},
  {$push: {"people": "Ned Stark"}},
  {$push: {"people": "Arya Stark"}},
  {$push: {"people": "Sansa Stark"}}
);

//I think this works??
// { $push: { "people": { $each: [ "Ned Stark", "Arya Stark", "Sansa Stark" ] } } }

//
db.houses.update({"_id" : ObjectId("564ddb81152fdf110dc74bc8")},
  {$push: {"people": "Viserys Targaryen"}},
  {$push: {"people": "Daenerys Targaryen"}}
);

db.houses.update({"_id" : ObjectId("564ddb81152fdf110dc74bc6")},
  {$push: {"people": "Jon Arryn"}}
);

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.remove( { "motto": "As High as Honor" } );
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.remove({"_id" : ObjectId("564ddca3a53b642b12d8e383")});
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
