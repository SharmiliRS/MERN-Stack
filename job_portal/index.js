import express ,{json} from "express";
import { MongoClient, ObjectId } from 'mongodb';
var app = express();
app.use(json());
const db_name = "job_portal";
const MONGODB_URL = "mongodb+srv://rssharmili:Sharmili@cluster0.gc3yk.mongodb.net/";
 const client = new MongoClient(MONGODB_URL);

// cors for connecting
import cors from "cors";
app.use(cors());



 app.post("/createJob",async(req,res)=>{
    let {name, company_name, requirements} = req.body;
    await client.connect();
    let db = client.db(db_name);
    await db.collection("job").insertOne({
        "name" : name,
        "company_name" : company_name,
        "requirements" : requirements
    });
    res.json({"msg" : "job created"})
 })
// read
app.get("/listJob", async(req,res)=>{
    await client.connect();
    let db = client.db(db_name);
    let data = await db.collection('job').find({}).toArray();
    res.status(200).json(data)

});

// update
app.put('/updateCompany',async(req,res)=>{
    let {name,company_name} = req.query;
    await client.connect();
    let db = client.db(db_name);
    await db.collection("job").updateOne({"name":name}, {$set:{"company_name":company_name}});
    res.json({"msg":"mobile no is updated"});
})


// delete
app.delete("/deleteUserByName",async(req,res)=>{
    let {name} = req.query;
    await client.connect();
    let db = client.db(db_name);
    await db.collection("job").deleteOne({"name":name})
    res.json({msg:"user deleted"})
})
app.delete("/deleteJob",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db(db_name);
    await db.collection("job").deleteOne({"_id":new ObjectId(id)})
    res.json({msg:"Job Deleted"})
})
app.post('/updateJob',async(req,res)=>{
    let {id,name,company_name,requirements} = req.body;
    await client.connect();
    console.log(id,name,company_name,requirements);
    let db = client.db("job_portal");
    await db.collection("job").updateOne( {"_id":new ObjectId(id)},{$set:{"name":name,"company_name":company_name,"requirements":requirements}});
    res.json({"msg":"updated"});
})


 app.listen(8080,()=>{
    console.log("server started")
});