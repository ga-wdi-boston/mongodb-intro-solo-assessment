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

db.houses.insert({
   name: 'Arryn',
   motto: 'As High as Honor'
});

db.houses.insert({
   name: 'Stark',
   motto: 'Winter is Coming'
});

db.houses.insert({
   name: 'Targaryen',
   motto: 'Fire and Blood'
});


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

db.houses.update({ name: 'Stark' },
  { $push: { people: 'Ned Stark' } }
);

db.houses.update({ name: 'Stark' },
  { $push: { people: 'Arya Stark' } }
);

db.houses.update({ name: 'Stark' },
  { $push: { people: 'Sansa Stark' } }
);

db.houses.update({ name: 'Targaryen' },
  { $push: { people: 'Viserys Targaryen' } }
);

db.houses.update({ name: 'Targaryen' },
  { $push: { people: 'Daenerys Targaryen' } }
);

db.houses.update({ name: 'Arryn' },
  { $push: { people: 'Jon Arryn' } }
);


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

db.houses.update({ name: 'Arryn' },
  { $unset: { motto: 1 } }
);


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

db.houses.remove({ name: "Stark"});


//Do not change anything after this line
db.houses.find().forEach(printjson);
