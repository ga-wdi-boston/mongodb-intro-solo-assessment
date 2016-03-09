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
db.createCollection("houses")
{ "ok" : 1 }
db.houses.insert({
    house: "Arryn",
    motto: "As High as Honor",
})
db.houses.insert({
    house: "Stark",
    motto: "Winter is Coming",
})
db.houses.insert({
    house: "Targaryen",
    motto: "Fire and Blood",
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
 {},
 {$set: {members: []]}},
 {multi: true}
)
db.houses.update(
   { house: "Stark" },
   { $push: { members: { $each: [ "Ned", "Arya", "Sansa" ] } } }
)

db.houses.update(
   { house: "Targaryen" },
   { $push: { members: { $each: [ "Viserys", "Daenerys"] } } }
)

db.houses.update(
   { house: "Arryn" },
   { $push: { members: "Jon" } }

)

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
 db.houses.remove( { motto : "As High as Honor"} )
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.remove( { house : "Stark" } )
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
