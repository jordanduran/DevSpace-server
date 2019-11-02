require('dotenv').config()
const knex = require('knex')
const UsersService = require('./UsersService')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

knexInstance.from('users').select('*')
    .then(result => {
        console.log(result)
    })

console.log(UsersService.getAllUsers())
