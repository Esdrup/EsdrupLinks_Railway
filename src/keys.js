if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
    console.log("ENV:",process.env.NODE_ENV);
}

module.exports = {
    database:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
    }
}