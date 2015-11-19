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
mongoimport --db=mongo-crud --collection=houses --type=csv


db.houses.insert([
  {
    house: "Arryn",
    motto: 'As High as Honor'
  },
  {
    house: "Stark",
    motto: "Winter is Coming"
  },
  {
    house: "Targaryen",
    motto: "Fire and Blood"
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
db.houses.update({"house": "Stark"}, { $push: {"Ned"});
db.houses.update({"house": "Stark"}, { $push: {"Arya"});
db.houses.update({"house": "Stark"}, { $push: {"Sansa"});
db.houses.update({"house": "Targaryen"}, { $push: {"Viserys"});
db.houses.update({"house": "Targaryen"}, { $push: {"Daenerys"});
db.houses.update({"house": "Arryn"}, { $push: {"Jon"});
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.collection.remove(
  House: "Arryn",
  motto: "As High As Honor"
);
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.collection.remove(
   House: "Stark"
)
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
