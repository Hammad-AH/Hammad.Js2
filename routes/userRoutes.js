const express = require('express')
const {getAllUsers} = require('../controller/user.controller')

const route = express.Router();
const models = require('../models')

route.psot("/user", (req , res) => {
    const {id, email, name, contact} = req.body;
    const User = models.users;
    User.create({
        id: id,
        email: email,
        name: name,
        contact: contact
    })
res.status(201).json({message: "User created Successfully"})

})
let user01 ={
    name:"hammad",
    id:1,
    email:"hammad@example.com",
    contact:"03035912244"
    }
    let user02 ={
        name:"ubaid",
        id:2,
        email:"ubaid@example.com",
        contact:"03121047036"
        }
        let user03 ={
            name:"faiz",
            id:3,
            email:"faiz@example.com",
            contact:"03173734451"
            }
    let user04 ={
        name:"hadi",
        id:4,
        email:"hadi@example.com",
        contact:"03035912224"
        }
        let user05 ={
            name:"ibrahim",
            id:5,
            email:"ibrahim@example.com",
            contact:"03121117682"
            }
    
    let users = [user01,user02,user03,user04,user05];

     const getAllUsersById = (req , res) =>{
       try{ let id = req.params.id;
        let findUsers = users.filter((user) => {
            if(user.id == id){
                return user


            }


        })
        let userName = findUsers[0].name;
            res.status(200).json({message: "success ", data:users})}
       catch(e){
        console.log("expection", e);

       }
        }

route.get('/', (req , res) => {
const users = models.users
users.create({
    email:
    name:
    contact:


})

});

route.get('/users/:id', (req , res) => {
    try{
        res.status(200).json({message: 'success 2'})
    
    
    }
    catch(e){
        console.log("expection", e);
    }
})

module.exports  = {getAllUsers, getAllUsersById};


module.exports = route;
