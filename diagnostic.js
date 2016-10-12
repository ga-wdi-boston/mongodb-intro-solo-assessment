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
db.createCollection(houses);
db.houses.insert( {house: 'Arryn', motto: 'As High as Honor'}, 
						{house: 'Stark', motto: 'Winter is Coming'},
						{house: 'Targaryen', motto: 'Fire and Blood'}
					 );
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
db.houses.find({house: 'Stark'}).insert({members: ['Ned', 'Arya', 'Sansa']});
db.houses.find({house: 'Targaryen'}).insert({members: ['Viserys']});
db.houses.find({house: 'Targaryen'}).$push({members: ['Daenerys']});
db.houses.find({house: 'Arryn'}).insert({members: ['Jon']});
// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.find({house: 'Arryn'}).update({}, { $unset: {'motto': ''} });
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here
db.houses.find({house: 'Stark'}).remove();
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
