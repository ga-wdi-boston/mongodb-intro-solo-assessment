// Assessment: An Introduction to MongoDB

// do not change anything between here and question 1

var db = new Mongo().getDB('westeros');
db.dropDatabase();

// Question 1

// Create a collection called houses, and insert the following houses,
// with name and motto fields:
//
// House Arryn, motto 'As High as Honor'
// House Stark, motto 'Winter is Coming'
// House Targaryen, motto 'Fire and Blood'

// your code begins here
const housesSchema = new mongoose.Schema({
  house: {
    name: String,
    motto: String
  }
})

db.houses.insert({
  name: "Arryn",
  motto: "As High as Honor"
})
db.houses.insert({
  name: "Stark",
  motto: "Winter is Coming"
})
db.houses.insert({
  name: "Targaryen",
  motto: "Fire and Blood"
})

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
  {name: "Stark"},
  {
    $set: {[
      members: "Ned Stark",
      members: "Arya Stark",
      members: "Sansa Stark"
    ]
    },
  }
)
db.houses.update(
  {name: "Targaryen"},
  {
    $set: {[
      members: "Viserys Targaryen",
      members: "Daenerys Targaryen"
    ]
    },
  }
)
db.houses.update(
  {name: "Targaryen"},
  {
    $set: {[
      members: "Jon Arryn"
    ]
    },
  }
)
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.remove( { motto : "As High as Honor" }, 1 )
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.remove( { name : "Stark" }, 1 )
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
