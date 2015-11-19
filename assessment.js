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
//here's the bulk load
mongoimport --db=mongo-westeros --collection=houses --type=csv --headerline --file=westeros-data/csv/houses.csv;

//here's the insert
db.houses.insert([
  {
  name: "Arryn",
  motto: "As High as Honor"

},
{
  name: "Targaryen",
  motto: "Fire and blood"

},
{
   name: "Stark",
  motto: "Winter is Coming"
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
db.houses.update({name : "Stark")},
{ $push : { people: { first_name : "Ned", surname: "Stark" } , { first_name :  "Arya", surname : "Stark"} { first_name: "Sansa', surname: 'Stark"}}} );

db.houses.update({name : "Targaryen")},
{ $push : { people: { first_name : "Viserys", surname: "Targaryen" } , { first_name: "Daenerys", surname : "Targaryen"}}} );

db.houses.update({"name" : "Arryn"});
{ $push : { people: { first_name : "Jon", surname: "Arryn" }}} );
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.
db.house.delete({ motto: "As High as Honor"});
// your code begins here

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.house.delete({Stark});
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
