module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    }
  });
  return Product;
};
