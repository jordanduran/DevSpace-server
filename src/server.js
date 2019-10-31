require('dotenv').config();
const app = require('./app');
const { PORT } = require('./config');

const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});
knexInstance.from('users').select('name', 'email', 'avatar')
    console.log('knex and driver installed correctly');

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
