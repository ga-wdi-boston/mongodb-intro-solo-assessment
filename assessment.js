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
  motto: 'Winter is Coming',

},
{
  name: 'Targaryen',
  motto: 'Fire and Blood',

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

db.houses.stark.update({}, {$push: {given_name: "Ned", "Arya", "Sansa"}}, {multi: true});

db.houses.targaryen.update({}, {$push: {given_name: "Viserys", "Daenerys"}}, {multi: true});

db.houses.arryn.update({}, {$push: {given_name: "Jon"}}, {multi: true});

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.remove( { "motto": "As High as Honor" } )

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.stark.drop()

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
