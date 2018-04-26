// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log("Unbale to connect");
    }else{
        console.log("Connected to Mongo DB");
        const db = client.db('TodoApp')


// deleteMany

db.collection('Todos').findOneAndDelete({_id:new ObjectID('5ae179a0a09b2feb7ff604b8')}).then((result)=>{
    console.log(result);
},()=>{

})

// deleteOne




//findOneAndDelete 

        // db.collection('Users').find({name:"Kushagra"}).toArray().then((docs)=>{
        //     console.log("Todos");
        //     console.log(`Todos Count ${JSON.stringify(docs,undefined,2)}`);
        // },(err)=>{});
    
    }
})