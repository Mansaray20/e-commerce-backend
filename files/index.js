const ctCategories = require('./category-seeds');
const ctProducts = require('./product-seeds');
const ctTags = require('./tag-seeds');
const ctProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const ctAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await ctCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await ctProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await ctTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await ctProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

ctAll();
