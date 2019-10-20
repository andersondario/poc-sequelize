require('dotenv').config({
    path: (process.env.NODE_ENV == 'prod')? '.env.prod' : '.env.dev'
})

module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

    dialect: process.env.DB_DIALECT,
    define: {
        timestamps: true,
        underscored: true
    }
}