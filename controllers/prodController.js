let db = require("./../models/index");

let Product = db.products;

const addProd = async (req, res) => {
  let { title, price } = req.body;
  let data = {
    title: title,
    price: price
  };
  let prod = await Product.create(data);
  res.send(prod);
};
const getAllProd = async (req, res) => {
  let prod = await Product.findAll({});
  res.send(prod);
};

const getByTitle = async (req, res) => {
  let title = req.params.title;
  let prod = await Product.findOne({ where: { title: title } });
  res.send(prod);
};

const updateProd = async (req, res) => {
  let title = req.params.title;
  let prod = await Product.update(req.body, { where: { title: title } });
  res.send(prod);
};

module.exports = {
  addProd,
  getAllProd,
  getByTitle,
  updateProd
};
