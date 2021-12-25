use test
// show dbs
// show collections


// db.persons.find().pretty()
// db.persons.aggregate().pretty()

// db.persons.find().count()
// db.persons.aggregate([{ $count: 'numVar' } ])

// db.persons.find().limit(4).pretty()
// db.persons.aggregate([{ $limit: 4 } ]).pretty()

// db.persons.find({}, { _id:0, name:1,}).sort({ name: 1 }).pretty()
// db.persons.aggregate([
// 	{ $project: { _id:0, name:1 } },
// 	{ $sort: { name: 1 } },
// ]).pretty()


// // Get unique value | count every fields duplicate value
// db.persons.aggregate([{ $group: { _id: '$gender'}} ])
// db.persons.aggregate([{ $group: { _id: { gender: '$gender'} }} ])
// db.persons.aggregate([{ $group: { _id: '$gender', count: { $sum: 1 }}} ])

// // Count Same Aged People total value
// db.persons.aggregate([{ $group: { _id: '$age', age: { $sum: '$age' }}} ])


// How to get unique value of and array field of every document ?
// 		. { $unwind: '$array' } 				=> convert array => object with repeaded value but unique tags property
// 		. { $group: { _id: '$tags'} } 	=> only get uniques value from every tags array of every document : new Set(...arr)
// 		. Object.values(dbOutput) 			=> [...]


// db.persons.aggregate([
// 	{ $unwind: '$tags' }, 					// convert array => object { ...arr, tags: [array[tags]][i] }
// 	{ $group: { _id: '$tags'} } 		// only get uniques value from every tags array of every document : new Set(...arr)
// ]).pretty() // count every fields duplicate value


