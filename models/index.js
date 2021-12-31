let db_conf = require("./../config/db_conf");
let { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(db_conf.db, db_conf.password, db_conf.user, {
  host: db_conf.host,
  dialect: db_conf.dialect,
  pool: {
    max: db_conf.pool.max
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log(err);
  });

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require("./prodModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(res => {
  console.log("ok");
});

module.exports = db;
