const conn = require('./conn');
const { STRING, BOOLEAN, ENUM, UUID, UUIDV4 } = conn.Sequelize;

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: ENUM("coffee", "tea", "smoothie", "shirt", "mug", "hat"),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: STRING,
  },
  size: {
    type: ENUM("Small", "Medium", "Large"),
    defaultValue: "Medium",
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = {
  Product,
};