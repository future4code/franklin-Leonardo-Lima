import { DataSource } from 'typeorm';
import Product from '../model/Product';
import Tag from '../model/Tag';

const DB = new DataSource({
  type: 'sqlite',
  database: "./database/amaro.db",
  entities: [Product, Tag],
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
