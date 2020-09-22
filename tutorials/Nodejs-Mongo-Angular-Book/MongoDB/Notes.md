## Mongo DB Notes:

**Creating DBs**

to create a db in mongo use the `use <newDb>` command to create a temporary db that will be lost if a collection isn't added to it.

**Deleting Dbs**

to delete a db simply run the `db.dropDatabase()` command while **using** that DB

**Copying Dbs**

creates an exact duplication of the databased but with a different monicer. *switch* to the db you want to copy then `copyDatavase(origin, destination, [hostname])` destination is the name of the database to create on this MongoDB server. **hostname** is for when you're taking them from a different host.

`db.copyDatabase('customers', 'customer_archive')`

**Show Collections**

switch to the db you want to use then use `show collections`. 

* **Creating Collections**
    use the `createCollection(<collectionName>, [options])` options such as *capped*, *autoIndexID* and *max* can be added to specify the collections type etc.




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

