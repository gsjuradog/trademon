require('dotenv').config();
const path = require('path');

const fs = require('fs');
const Sequelize = require('sequelize');
// const basename = path.basename(__filename);
// const DBNAME = process.env.DB_TEST_TITLE;
// const USER = process.env.DB_USER;
// const PASSWORD = process.env.DB_PASSWORD;
// const HOST = process.env.DB_TEST_HOST;
// plz
const db = {};

const sequelize = new Sequelize(process.env.DATABASE_URL);
const sequelize = new Sequelize(
  {
    host: HOST,
    port: 5432,
    dialect: 'postgres',
    database: DBNAME,
    username: USER,
    password: PASSWORD,
    dialectOptions: {
      ssl: true
    }
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
