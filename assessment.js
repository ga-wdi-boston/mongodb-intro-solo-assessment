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

mongoimport --db=mongo-crud --collection=houses --headerline --type=csv --file=sample/csv/houses.csv

db.houses.insert ({
name: "House Arryn",
motto: "As High as Honor"
})

db.houses.insert ({
name: "House Stark",
motto: "Winter is Coming"
})

db.houses.insert ({
name: "House Targaryen",
motto: "Fire and Blood"
})


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


db.houses.update(
  {name: "House Stark"},
  {
    $set: { members: "Ned Stark"},
    $set: { members: "Arya Stark"},
    $set: { members: "Sansa Stark"},
  }
)

db.houses.update(
  {name: "House Targaryen"},
  {
    $push: { members: "Viserys Targaryen"},
    $push: { members: "Daenerys Targaryen"}
  }
)

db.houses.update(
  {name: "House Arryn"},
  {
    $set: { members: "Jon Arryn" }
  }
)

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

db.houses.remove( { motto: "As High as Honor" } )


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
