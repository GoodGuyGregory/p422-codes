## Mongo DB Notes:

**Creating DBs**

to create a db in mongo use the `use <newDb>` command to create a temporary db that will be lost if a collection isn't added to it.

**Deleting Dbs**

to delete a db simply run the `db.dropDatabase()` command while **using** that DB

**Copying Dbs**

creates an exact duplication of the databased but with a different monicer. *switch* to the db you want to copy then `copyDatavase(origin, destination, [hostname])` destination is the name of the database to create on this MongoDB server. **hostname** is for when you're taking them from a different host.

`db.copyDatabase('customers', 'customer_archive')`

### Collections

**Show Collections**

switch to the db you want to use then use `show collections`. 

* **Creating Collections**
    use the `createCollection(<collectionName>, [options])` options such as *capped*, *autoIndexID* and *max* can be added to specify the collections type etc.

**Adding Items to Collections**

typically done through the node.js application it is still possible to add items to a collection with the `insert()` command

```shell
# switch to the db to insert items into
use testDb
coll = db.getCollection("newCollection")
# verify it exists
coll.find()
#  begin inserting into the collection
coll.insert({ vehicle: "plane", speed: "480 mph"})
coll.insert({ vehicle: "car", speed: "120 mph"})
coll.insert({ vehicle: "train", speed: "220 mph"})

#  shows elements inserted into the collection
coll.find()

```

**Find Specific Elements in a Collection**

```shell
use testDB
coll = db.getCollection("newCollection")
#  finf the item you desire
coll.find({speed: "220mph"})
```

**Updating Objects in a Collection**

you can update elements in a collection with two different methods:
    * `save(object)` saves the changes that you made to the object in question
    * `update(query, update, options)` 
    **update parameter**
    the update parameter is where you will update elements of the object this is an example of an update that uses Mongos parameters
    `{ $inc: {count: 1}, $set: { name: "New Name"}, $rename: { nickname: "alias"}}`
    **options**
    the options parameter has two properites **upsert** and **multi**

```shell
# switch to the testDb
use testDB
coll = db.getCollection("newCollection")
coll.find()
# update the collection
coll.update({ speed: "120mph"}, 
    { $set: { speed: "150 mph", updated: true}},
    { upsert: false, multi: true})
#  save the colltions updates
coll.save({ "_id": ObjectId("<uniqueID>"),
            "vehicle": "plane", "speed": "500mph"})
# display your changes 
coll.find()

```

**Deletion of Items from a Collection**

to remove items from a collection you will need to call `remove(query)` you can specify which item to remove with the query attributes. if you use the `remove()` without a query it will remove all documents inside of the collection.

```shell
use testDb
coll = db.getCollection("newCollection")
# deletes all the elements inside of the collection
# coll.remove()

# removes just a plane from the collection after all the property taxes are pretyy fucking high
coll.remove({vehicle: "plane"})
coll.find()
```


**Creating a user in a Database**

Adds a new user with specified roles and privilages.

```shell
    db.createUser({user: "testUser",
    pwd: "test",
    roles: ["readWrite","dbAdmin"]})
```

**Removing Users from a DB**

```shell
# Switch to the DB of Choice
use <DB_of_Choice>
db.removeUser("testUser")
```

**Creating a User Admin Account**

User Admins should only be allowed to create users and not manage the DB or perform any other administration functions at all. This approach keeps a clean seperation between db admins and user account administration.

Create a user Admin:

```shell
use admin
db.createUser({user: "<username>", 
    pwd: "<password>",
    roles: [ "userAdminAnyDataBase" ]
})
```

**Creating a Database Admin Account**

```shell
use admin 
db.createUser({ user: "dbadmin", pwd: "test", roles: ["readWriteAnyDatabase", "dbAdminAnyDatabase", "clusterAdmin"]}) 
```

**Aggregation Functions**

