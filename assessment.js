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
const houseSchema = new mongoose.Schema({
  houses: {
    name: {
      type: String,
      required: true
    },
    motto: {
      type: String,
      required: true
    }
  }
});

db.houseSchema.insert([
  {
    name: 'House Arryn'
    motto: 'As High as Honor'
  },
  {
    name: 'House Stark'
    motto: 'Winter is Coming'
  },
  {
    name: 'House Targaryen'
    motto: 'Fire and Blood'
  }
]);

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

db.houses.update({name:"House Stark"}, {$push: {members:
   {
     firstname: "Ned", lastname: "Stark",
     firstname: "Arya", lastname: "Stark",
     firstname: "Sansa", lastname: "Stark" }
   }
 {name: "House Targaryen"}
{
  firstname: "Viserys", lastname:"Targaryen",
  firstname: "Daenerys", lastname: "Targaryen"}
  {name: "House Arryn"}
  {
    firstname: "Jon", lastname: "Arryn"
  }
}});

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

db.houses.remove({motto: "As High As Honor"})

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

db.houses.remove({name:"House Stark"})

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
