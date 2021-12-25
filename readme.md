
### MongoDB Aggrigate Pipeline / Framework

Besic Steps:

	1. start mongodb database

		$ sudo systemctl start mongodb

	2. Login to your Mongo Shell (REPL)

		$ mongo

	3. Fill with some sample Data:
	(Can Download from: https://github.com/bstashchuk/MongoDB-Aggregation-Tutorial.git)

		> db.persons.insertMany([
			{ .... },
			{ .... },
		])


##### My Steps:
	. I am using Sublime Text As Mongo Shell or REPL
	. Download (Clone) the repo
	. create a file 'mongo.js' which will execute our all code:


	 	db.persons.insertMany( <paste the array of JSON here> )


	db.persons.find().pretty()
	db.persons.aggregate().pretty()

	db.persons.find().count()
	db.persons.aggregate([{ $count: 'numVar' } ])

	db.persons.find().limit(4).pretty()
	db.persons.aggregate([{ $limit: 4 } ]).pretty()

	db.persons.find({}, { _id:0, name:1,}).sort({ name: 1 }).pretty()

	db.persons.aggregate([
		{ $project: { _id:0, name:1 } },
		{ $sort: { name: 1 } },
	]).pretty()



###### Get unique value | count every fields duplicate value
	db.persons.aggregate([{ $group: { _id: '$gender'}} ])
	db.persons.aggregate([{ $group: { _id: { gender: '$gender'} }} ])
	db.persons.aggregate([{ $group: { _id: '$gender', count: { $sum: 1 }}} ])

###### Count Same Aged People total value
	db.persons.aggregate([{ $group: { _id: '$age', age: { $sum: '$age' }}} ])


###### How to get unique value of and array field of every document ?
	1. { $unwind: '$array' } 		=> convert array => object with repeaded value but unique tags property
	2. { $group: { _id: '$tags'} } 	=> only get uniques value from every tags array of every document : new Set(...arr)
	3. Object.values(dbOutput) 		=> [...]


	db.persons.aggregate([
		{ $unwind: '$tags' }, 		// convert array => object { ...arr, tags: [array[tags]][i] }
		{ $group: { _id: '$tags'} } 	// only uniques value of every tags of every document : new Set(...arr)
	]).pretty() // count every fields duplicate value
