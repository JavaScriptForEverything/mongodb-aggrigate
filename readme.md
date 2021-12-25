
### MongoDB Aggrigate Pipeline / Framework

Besic Steps:
	1. start mongodb database

			$ sudo systemctl start mongodb

	2. Login to your Mongo Shell (REPL)

			$ mongo

	3. Fill with some sample Data: (Can Download from: https://github.com/bstashchuk/MongoDB-Aggregation-Tutorial.git)

			> db.persons.insertMany([
				{ .... },
				{ .... },
			])


##### My Steps:
	. I am using Sublime Text As Mongo Shell or REPL
	. Download (Clone) the repo
	. create a file 'mongo.js' which will execute our all code:


	 		db.persons.insertMany( <paste the array of JSON here> )

