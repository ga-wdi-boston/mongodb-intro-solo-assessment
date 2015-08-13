// Assessment: An Introduction to MongoDB

// do not change anything between here and question 1

var db = new Mongo().getDB('westeros');
db.dropDatabase();

// Question 1
//
// Create a collection called houses, and insert the following houses,
// with name and motto fields:
//

// your code begins here

// House Arryn, motto 'As High as Honor'
db.houses.insert({
    name: 'Arryn',
    motto: 'As High as Honor'
});

// House Stark, motto 'Winter is Coming'
db.houses.insert({
    name: 'Stark',
    motto: 'Winter is Coming'
});
// House Targaryen, motto 'Fire and Blood'
db.houses.insert({
    name: 'Targaryen',
    motto: 'Fire and Blood'
});

// your code ends here


// Question 2
//
// Using update and $push, add the following people to the
// respective houses
//

// your code begins here

// Ned Stark
// Arya Stark
// Sansa Stark
db.houses.update({
    name: "Stark"
}, {
    $push: { members: {
        ned: "Ned",
        arya: "Arya",
        sansa: "Sansa"
         }
    }
});
// Viserys Targaryen
// Daenerys Targaryen
db.houses.update({
    name: "Targaryen"
}, {
    $push: { members: {
        viserys: "Viserys",
        daenerys: "Daenerys"
         }
    }
});

// Jon Arryn

db.houses.update({
    name: "TA"
}, {
    $push: { members: {
        jon: "Jon"
         }
    }
});

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

// your code begins here

db.houses.update({
    name: "Arryn"
}, { $unset: { motto: 1 }});
})

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

// your code begins here

db.houses.remove({ name: "Stark"});

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
