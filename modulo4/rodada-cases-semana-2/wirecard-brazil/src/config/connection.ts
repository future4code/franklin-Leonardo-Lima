import { DataSource } from 'typeorm';
import Client from '../model/Client';
import Payment from '../model/Payment';

const DB = new DataSource({
  type: 'sqlite',
  database: './database/wirecard-brazil.db',
  entities: [Client, Payment],
  synchronize: true,
  logging: false,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
DB.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));

export default DB;
