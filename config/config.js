
import { Sequelize } from "sequelize";
 
  // create connection
  const db = new Sequelize('transportApi', 'postgres', 'tentaralangit76', {
      host: 'localhost',
      dialect: 'postgres'
  });
   
  // export connection
  export default db;
