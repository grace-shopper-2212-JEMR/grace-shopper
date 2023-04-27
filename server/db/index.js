const conn = require('./conn');
const User = require('./User');
const { Product, Merch, Drink } = require('./Product');
const Order = require('./Order');
const LineItem  = require('./LineItem');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product); 
LineItem.belongsTo(Merch);
LineItem.belongsTo(Drink);


const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, foo, bar, bazz, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    Product.create({ name: 'foo' }),
    Product.create({ name: 'bar' }),
    Product.create({ name: 'bazz' }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);
  
  const Coffee = await Drink.create({
    name: "Coffee",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    defaultSize: 'SMALL', 
    isTea: false,
    isHot: true,  
  })

  const Cappuccino = await Drink.create({
    name: "Cappuccino",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    defaultSize: 'SMALL',
    isTea: false,
    isHot: true,
  })

  const Latte = await Drink.create({
    name: "Latte",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    defaultSize: 'SMALL',
    isTea: false,
    isHot: true,
  })



  const Tea = await Drink.create({
    name: "Black Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    defaultSize: 'SMALL',
    isTea: true,
    isHot: true,
  })

  const Tshirt = await Merch.create({
    name: "T-Shirt",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    defaultSize: 'SMALL',
  })


  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: bazz, quantity: 3});
  await ethyl.addToCart({ product: foo, quantity: 2});
  return {
    users: {
      moe,
      lucy,
      larry
    },
    products: {
      foo,
      bar,
      bazz
    }
  };
};

// console.log('db index', console.log(syncAndSeed()))

module.exports = {
  syncAndSeed,
  User,
  Product,
  Merch, 
  Drink,
  LineItem
};
