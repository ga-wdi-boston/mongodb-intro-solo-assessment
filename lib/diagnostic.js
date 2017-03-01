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
db.houses.insert({
  name: "Arryn",
  motto: "As High as Honor"
});
db.houses.insert({
  name: "Stark",
  motto: "Winter is Coming"
});
db.houses.insert({
  name: "Targaryen",
  motto: "Fire and Blood"
});
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
db.houses.update({ name: "Stark"}, {$set: {
  members: ["Ned", "Arya"]
}});

db.houses.update({ name: "Stark"}, {$push: {
  members: "Sansa"
}});

db.houses.update({ name: "Targaryen"}, {$set: {
  members: ["Viserys", "Daenerys"]
}});

db.houses.update({ name: "Arryn"}, {$set: {
  members: ["Jon"]
}});
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.update({
  name: "Arryn"
}, {
  $unset: {
    motto: ""
  }
});
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.remove({ name: "Stark" });
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
