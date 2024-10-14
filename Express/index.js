var express = require("express");
var app = express();
app.use(express.json());
const { MongoClient ,ObjectId} = require('mongodb');
const fileUpload = require("express-fileupload");
var jwt = require('jsonwebtoken');

app.use('/api/',(req,res,next)=>{
    //reading the header from the header
    let {token} = req.headers;
    if(token == "" || token == undefined){
        res.json({"msg" : "pls send the token"})
    }else{
        jwt.verify(token, 'SECRET');
        next();
        console.log(token);
    }
    console.log("I'm in middleware");
    
    
});//middleware

app.get("/",(req,res)=>{
    res.json({"name":"Bhavesh"});
 });

app.get("/myname",(req,res)=>{
   res.json({"name":"Sharmili"});
});

app.post("/myname",(req,res)=>{
    res.json({"name":"Jaaaaaaaannnnnn"});
 });

 app.post("/login",(req,res)=>{
    let {email,password} = req['body'];
    if(email == "rssharmili@gmail" && password == "123456"){
        res.json({"msg":"you are crt"})
    }else{
        res.json({"msg":"you are wrong"})
    }
    console.log(email,password);
    res.json({"msg":email});
    
 });

 
app.post("/register",(req,res)=>{
    let {name,email,password,address} = req['body']
if (name ==""){
    res.json({"name":"please enter a name "})
}
else if(email == ''){
    res.json({"msg":"enter a email"});
}else if (password ==''){
    res.json({"msg":"Enter a correct password"});
}
else if (address == ''){
    res.json({"msg":"fill the correct address"});
}
else{
    res.json({"msg":"success"});
}    
console.log(name,email,password,address);    
 });

 app.post("/sum",(req,res)=>{
    let {a,b,sum} = req['body'];
    sum = a+b
    res.json({"msg": "sucess"})
    console.log(sum);
    
    
 });
 const DATABASE_NAME = "office_emp";
 const MONGODB_URL = "mongodb+srv://rssharmili:Sharmili@cluster0.gc3yk.mongodb.net/";
 const client = new MongoClient(MONGODB_URL);
 app.post("/createEmployee",async(req,res)=>{
    let {name,email,password,mobile_no} = req.body;
    let data ={
        "name" : name,
        "email" : email,
        "password" : password,
        "mobile_no" : mobile_no,
    }
    await client.connect();
    let db = client.db(DATABASE_NAME);

    await db.collection("emp").insertOne(data);
    res.status(200).json({"message":"employee created!!"})
 });
app.get("/listemp",async (req,res)=>{
    await client.connect();
    let db = client.db(DATABASE_NAME);
    let list = await db.collection("emp").find({}).toArray();
    res.status(200).json(list)
})
app.get("/api/emplistbyname/:name",async(req,res)=>{
    await client.connect(); // Connect to MongoDB
    let {name} = req.params;
    let db = client.db(DATABASE_NAME); // Select the database
    let list = await db.collection("emp").find({"name":name}).toArray(); // Insert employee data
    res.status(200).json(list);
})
app.post("/emplogin",async(req,res)=>{
    await client.connect(); // Connect to MongoDB
    let {email , password} = req.body;
    let db = client.db(DATABASE_NAME); // Select the database
    let list = await db.collection("emp").find({"email":email,"password":password}).toArray(); // Insert employee data
    if(list.length > 0){
        res.json({"msg":"you are crt"});
    }else{
        res.status(400).json({"msg":"you are wrong"});
    }
    
})
app.delete("/api/deleteUserByname",async(req,res)=>{
    let{name} = req.query;
    await client.connect();
    let db = client.db("office_emp");
    await db.collection("emp").deleteOne({"name":name})
    res.json({"msg":"user deleted"})

})
app.put("/api/updatepassword",async(req,res)=>{
    let{name,password} = req.query;
    await client.connect();
    let db = client.db("office_emp");
    await db.collection("emp").updateOne({"name":name},{$set :{"password" : password}});
    res.json({"msg":"password updated"})

})
app.post("/api/updatepassword",async(req,res)=>{
    let{name,password} = req.body;
    await client.connect();
    let db = client.db("office_emp");
    await db.collection("emp").updateOne({"name":name},{$set :{"password" : password}});
    res.json({"msg":"password updated"})

})

app.get("/api/getById",async(req,res)=>{
    let{id} = req.query;
    await client.connect();
    let db = client.db("office_emp");
    let data = await db.collection("emp").find({ "_id": new ObjectId(id)}).toArray();
    res.json(data)

})
app.post('/login1',async(req,res)=>{
    let {email,password} = req.body;
    await client.connect();
    let db = client.db("office_emp");
    let loginRes = await db.collection("emp").find({"email":email,"password":password}).toArray();
    if(loginRes.length > 0){
        var token = jwt.sign({'name': loginRes[0]['name']},'SECRET')
        res.json({"msg":"u r crt","token":token})
    }else{
        res.json({"msg":"u r wrong"})
    }
})
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.post('/upload', function(req, res) {

    let file =  req.files.img;// the uploaded file object
    let uploadPath = __dirname + '/uploads/' + file.name;
    file.mv(uploadPath , function(err){
        if(err)
            return res.status(500).send(err);
        res.send('File uploaded!');
    });
});


app.listen(8080,()=>{
    console.log("server started")
});