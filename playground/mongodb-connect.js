const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {
  if (error) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db("TodoApp");

  db.collection("Todos").insertOne(
    {
      text: "Something to do",
      completed: false
    },
    (err, res) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }
      console.log(JSON.stringify(res.ops, undefined, 2));
    }
  );
  //this is something
  db.collection("Users").insertOne(
    {
      name: "Salah",
      age: 24,
      location: "Karaj"
    },
    (err, res) => {
      if (err) {
        return console.log("Unable to insert user", err);
      }
      console.log(JSON.stringify(res.ops, undefined, 2));
    }
  );

  client.close();
});
