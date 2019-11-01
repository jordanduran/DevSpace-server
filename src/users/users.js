require('dotenv').config()
const knex = require('knex')
const UsersService = require('./UsersService')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

console.log(UsersService.getAllUsers())
