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
    house_name: 'Arryn',
    motto: 'As High as Honor',
  },
  {
    house_name: 'Stark'
    motto: 'Winter is Coming'
  },
  {
    house_name: 'Targaryen'
    motto: 'Fire and Blood'
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
db.houses.update({"house_name" : house_name("Stark")}, { $push : { person: { given_name: 'Ned', surname: 'Stark' }, { given_name: 'Arya', surname: 'Stark' }, { given_name: 'Sansa', surname: 'Stark' }}});
db.houses.update({"house_name" : house_name("Targaryen")}, { $push : { person: { given_name: 'Viserys', surname: 'Targaryen' }, { given_name: 'Daenerys', surname: 'Targaryen' }}});
db.houses.update({"house_name" : house_name("Arryn")}, { $push : { person: { given_name: 'Jon', surname: 'Arryn' }}});
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
