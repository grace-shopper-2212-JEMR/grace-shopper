// const conn = require('./conn');
// const User = require('./User');
// const { Product, Merch, Drink } = require('./Product');
// const Order = require('./Order');
// const LineItem  = require('./LineItem');

// Order.belongsTo(User);
// LineItem.belongsTo(Order);
// Order.hasMany(LineItem);
// LineItem.belongsTo(Product); 
// LineItem.belongsTo(Merch);
// LineItem.belongsTo(Drink);


// const syncAndSeed = async()=> {
//   await conn.sync({ force: true });
//   const [moe, lucy, larry, foo, bar, bazz, ethyl] = await Promise.all([
//     User.create({ username: 'moe', password: '123' }),
//     User.create({ username: 'lucy', password: '123' }),
//     User.create({ username: 'larry', password: '123' }),
//     Product.create({ name: 'foo' }),
//     Product.create({ name: 'bar' }),
//     Product.create({ name: 'bazz' }),
//     User.create({ username: 'ethyl', password: '123' }),
//   ]);
  
//   const Coffee = await Drink.create({
//     name: "Coffee",
//     imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
//     defaultSize: 'SMALL', 
//     isTea: false,
//     isHot: true,  
//   })

//   const Cappuccino = await Drink.create({
//     name: "Cappuccino",
//     imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
//     defaultSize: 'SMALL',
//     isTea: false,
//     isHot: true,
//   })

//   const Latte = await Drink.create({
//     name: "Latte",
//     imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
//     defaultSize: 'SMALL',
//     isTea: false,
//     isHot: true,
//   })



//   const Tea = await Drink.create({
//     name: "Black Tea",
//     imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
//     defaultSize: 'SMALL',
//     isTea: true,
//     isHot: true,
//   })

//   const Tshirt = await Merch.create({
//     name: "T-Shirt",
//     imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
//     defaultSize: 'SMALL',
//   })


//   const cart = await ethyl.getCart();
//   await ethyl.addToCart({ product: bazz, quantity: 3});
//   await ethyl.addToCart({ product: foo, quantity: 2});
//   return {
//     users: {
//       moe,
//       lucy,
//       larry
//     },
//     products: {
//       foo,
//       bar,
//       bazz
//     }
//   };
// };

// // console.log('db index', console.log(syncAndSeed()))

// module.exports = {
//   syncAndSeed,
//   User,
//   Product,
//   Merch, 
//   Drink,
//   LineItem
// };

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
    isTea: false,
    isHot: true,
  })

  const Cappuccino = await Drink.create({
    name: "Cappuccino",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: false,
    isHot: true,
  })

  const Latte = await Drink.create({
    name: "Latte",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: false,
    isHot: true,
  })

  const IcedCoffee = await Drink.create({
    name: "Iced Coffee",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: false,
    isHot: false,
  })

  const IcedLatte = await Drink.create({
    name: "Iced Latte",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: false,
    isHot: false,
  })

  const Espresso = await Drink.create({
    name: "Espresso",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: false,
    isHot: true,
  })

  const ColdBrew = await Drink.create({
    name: "Cold Brew",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: false,
    isHot: false,
  })


  const BlackTea = await Drink.create({
    name: "Black Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: true,
    isHot: true,
  })

  const IcedTea = await Drink.create({
    name: "Iced Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: true,
    isHot: true,
  })

  const GreenTea = await Drink.create({
    name: "Green Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: true,
    isHot: true,
  })

  const PeppermintTea = await Drink.create({
    name: "Peppermint Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: true,
    isHot: true,
  })

  const Matcha = await Drink.create({
    name: "Matcha",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: true,
    isHot: true,
  })

  const IcedMatcha = await Drink.create({
    name: "IcedMatcha",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    isTea: true,
    isHot: false,
  })



  const Tshirt = await Merch.create({
    name: "T-Shirt",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
  })

  const Hat = await Merch.create({
    name: "Baseball hat",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
  })

  const Mug = await Merch.create({
    name: "Logo Mug",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
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