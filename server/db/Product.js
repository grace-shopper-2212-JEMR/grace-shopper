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
});

const Merch = conn.define('merch', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
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
    AllowNull: false, 
    validate: {
      notEmpty: true,
    },
  },
})


const Drink = conn.define('drink', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
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
    AllowNull: false, 
    validate: {
      notEmpty: true,
    },
  },
  isTea: {
    type: BOOLEAN,
    allowNull: false, 
    validate: {
      notEmpty: true,
    },
  },
  isHot: {
    type: BOOLEAN,
    allowNull: false, 
    validate: {
      notEmpty: true,
    },
  },
})



module.exports = {
  Product, 
  Merch,
  Drink,
};


