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
    name: "House Arryn",
    motto: "As High as Honor"
  },
  {
    name: "House Stark",
    motto: "Winter is Coming"
  },
  {
    name: "House Targaryen"
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
db.houses.update({"name": "House Stark"}, {$push: {people: [{name: "Ned Stark", description: "dead"}, {name: "Anya Stark", description: "The fourth book was terrible without her. Or was that the third book?"}, {name: "Sansa Stark", description: "Why does this character exist?"}]}})

db.houses.update({"name": "House Targaryen"}, {$push: {people: [{name: "Viserys Targaryen"}, {name: "Daenerys Targaryen", description: "Tougher than you are."}]}})

db.houses.update({"name": "House Arryn"}, {$push: {people: {name: "Jon Arryn"}}})

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update({"name": "House Arryn"}, {$unset: {motto: ""}})
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.
//Then forget that you were writing a series. FOR SIX YEARS.
// your code begins here
db.houses.remove( { name: "House Stark" }, 1 )

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
