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

//if there was a csv file we would load it this way
mongoimport --db=mongo-crud --collection=houses --type=csv --headerline --file=data/houses.csv
// I think this is the command to create a collection without having a csv
db.createCollection(houses)

//then insert the houses
db.houses.insert({
  house_name: "Arryn",
  motto: "As High as Honor",
});
db.houses.insert({
  house_name: "Stark",
  motto: "Winter is Coming",
});
db.houses.insert({
  house_name: "Targaryen",
  motto: "Fire and Blood",
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


// this one was kind of confusing. Not sure if we ever used $push
// your code begins here

// looked up $push so I think I would use it like this
db.houses.insert({ $push: { house_name: "Stark", members: "Ned Stark", "Arya Stark", "Sansa Stark" } });


// db.houses.insert({house_name: "Stark"}, {$set: {"member": "Ned"}});
// db.houses.insert({house_name: "Stark"}, {$set: {"member": "Arya"}});
// db.houses.insert({house_name: "Stark"}, {$set: {"member": "Sansa"}});
// db.houses.insert({house_name: "Targaryen"}, {$set: {"member": "Viserys"}});
// db.houses.insert({house_name: "Targaryen"}, {$set: {"member": "Daenerys"}});
// db.houses.update({house_name: "Arryn"}, {$set: {"member": "Jon"}});
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.deleteMany({motto: "As High as Honor"});
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.deleteMany({house_name: "Stark"});
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
