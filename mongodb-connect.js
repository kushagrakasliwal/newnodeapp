// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

var user = {name : "Kushagra",
age:28};

var {name} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log("Unbale to connect");
    }else{
        console.log("Connected to Mongo DB");
        const db = client.db('TodoApp')

        // db.collection('Todos').insertOne({
        //     note : "compelte this section today",
        //     completed : false
        // },(err,result)=>{
        //     if(err){
        //         return console.log("Unable to isert todo");
        //     }
        //     else{
        //         console.log(JSON.stringify(result.ops,undefined,2));
        //     }

        // });

        // db.collection('Users').insertOne({
        //     name: 'Kushagra',
        //     age: 28,
        //     location : 'Pune'
        // },(err,result)=>{
        //     if(err){
        //         return console.log(err);
        //     }
        //     else{
        //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        //     }

        // })

        client.close();
    }
})