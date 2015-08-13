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
    name: 'House Arryn',
    motto: 'As High as Honor'
});

db.houses.insert({
    name: 'House Stark',
    motto: 'Winter is Coming'
});

db.houses.insert({
    name: 'House Targaryen',
    motto: 'Fire and Blood'
});

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

db.houses.update({
    name: "House Arryn"
}, {
    $push: { people: {
        name: 'Jon Arryn'
      }
    }
});

// db.houses.update({
//     name: "House Stark"
// }, {
//     $push: { people: {
//         name1: 'Ned Stark',
//         name2: 'Arya Stark',
//         name3: 'Sansa Stark'
//       }
//     }
// });

db.houses.update({
    name: "House Stark"
}, {
    $push: { people: {
        person: 'Ned Stark'
      }
    }
});

db.houses.update({
    name: "House Stark"
}, {
    $push: { people: {
        person: 'Arya Stark'
      }
    }
});

db.houses.update({
    name: "House Stark"
}, {
    $push: { people: {
        person: 'Sansa Stark'
      }
    }
});


// db.houses.update({
//     name: "House Targaryen"
// }, {
//     $push: { people: {
//         name1: 'Viserys Targaryen',
//         name2: 'Daenerys Targaryen'
//       }
//     }
// });


db.houses.update({
    name: "House Targaryen"
}, {
    $push: { people: {
        person: 'Viserys Targaryen'
      }
    }
});

db.houses.update({
    name: "House Targaryen"
}, {
    $push: { people: {
        person: 'Daenerys Targaryen'
      }
    }
});

// your code ends here


// Question 3
//
// House Arryn is not honorable!  Delete their motto.

db.houses.update({
    name: "House Arryn"
}, { $unset: { motto: 1 }});

// your code ends here


// Question 4
//
// You are George R. R. Martin!  Delete, without mercy,
// House Stark.

//db.houses.remove({ name: "House Stark"});

// your code ends here


//Do not change anything after this line
db.houses.find().forEach(printjson);
