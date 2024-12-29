const express = require('express');
// const bodyParser = require('body-parser')
const route = require('./routes/userRoutes')
const {Sequelize} = require('sequelize');
// const { sequelize } = require('./models');
const PORT = (5000);

const app = express();
app.use(express.json())
app.use(route)



const dbConnection = async () => {
    
    try{
        const sequelize = new Sequelize('hammad', 'root', '',{
            host:'localhost',
            dialect: 'mysql'
        });
        const connection = await sequelize.authenticate();
        console.log("Connection success", connection);
    }
    catch(error){
        console.log("error", error);
    }
}

dbConnection()


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

})