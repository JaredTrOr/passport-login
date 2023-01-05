require('dotenv').config();

const Sequelize = require('sequelize');
const UserModel = require('./models/User');

const connection = new Sequelize(
    process.env.DBNAME,
    process.env.DBUSERNAME,
    process.env.DBPASSWORD,
    {
        host: process.env.DBHOST,
        dialect: 'mysql',
        port: process.env.DBPORT
    }
)

const User = UserModel(connection, Sequelize);

connection.sync()
.then(() => {
    console.log('Connection!!');
})
.catch((err) => {
    console.log(`ERROR: ${err}`);
});

module.exports = {
    User
}