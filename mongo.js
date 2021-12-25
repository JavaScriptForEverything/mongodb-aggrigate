use test
// show dbs
// show collections


// db.persons.find().count() 		// => 1000
// db.persons.find().pretty().limit(4) 		// => 1000

// db.persons.aggregate().pretty()
// db.persons.aggregate([{ $limit: 1 } ]).pretty() 						// => db.persons.find().pretty().limit(4)
// db.persons.aggregate([{ $count: 'numVar' } ]).pretty() 		// => db.persons.find().count() 	=> 1000

// db.persons.aggregate([
// 	{ $limit: 1 }
// ]).pretty()


