const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'soccer',
  },
  {
    tag_name: 'football',
  },
  {
    tag_name: 'hucky',
  },
  {
    tag_name: 'baseball',
  },
  {
    tag_name: 'basketball',
  },
  {
    tag_name: 'cricket',
  },
  {
    tag_name: 'dodgeball',
  },
  {
    tag_name: 'chicken',
  },
];

const ctTags = () => Tag.bulkCreate(tagData);

module.exports = ctTags;
