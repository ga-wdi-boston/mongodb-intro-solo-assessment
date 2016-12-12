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
db.houses.insert([{
  name: "Arryn",
  motto: "As High as Honor",
}, {
  name: "Stark",
  motto: "Winter is Coming",
}, {
  name: "Targaryen",
  motto: "Fire and Blood",
}]);
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
db.houses.update({}, {
  $set: {
    "members": []
  }
}, false, true);
db.houses.update({
  name: "Winterfell"
}, {
  $push: [{
    members: "Ned Stark"
  }, {
    members: "Arya Stark"
  }, {
    members: "Sansa Stark"
  }]
});
// your code ends here


// Question 3
//
// house Arryn is not honorable!  Delete their motto.

// your code begins here
db.houses.update(
  {
  name: "Winterfell"
}, {
  $unset: {
    motto: ""
  }
});
// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// house Stark.

// your code begins here
db.houses.remove({name: "Winterfell"});
// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
