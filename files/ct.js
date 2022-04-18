const { Category } = require('../models');

const categoryData = [
  {
    ct_name: 'food',
  },
  {
    ct_name: 'shoes',
  },
  {
    ct_name: 'clothes',
  },
  {
    ct: 'boxer',
  },
  {
    ct: 'water',
  },
];

const ctCategory = () => Category.bulkCreate(categoryData);

module.exports = ctCategory ;
