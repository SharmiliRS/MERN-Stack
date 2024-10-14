import { MongoClient } from 'mongodb';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://rssharmili:Sharmili@cluster0.gc3yk.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'Office';

async function insertData() {
    let empData ={
        "name":"Sharmili",
        "id":"005",
        "address":"Madhavaram"
    }
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const data = await db.collection('Employee');
  await data.insertOne(empData);

  console.log("inserted");

  // the following code examples can be pasted here...

  return 'done.';
}
  insertData()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
