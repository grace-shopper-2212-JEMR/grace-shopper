const conn = require('./conn');
const User = require('./User');
const { Product } = require('./Product');
const Order = require('./Order');
const LineItem  = require('./LineItem');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product); 



const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const [moe, lucy, larry, foo, bar, bazz, ethyl] = await Promise.all([
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    Product.create({ name: 'foo', category: "shirt" }),
    Product.create({ name: 'bar', category: "hat"  }),
    Product.create({ name: 'bazz', category: "mug"  }),
    User.create({ username: 'ethyl', password: '123' }),
  ]);
  
  const Coffee = await Product.create({
    name: "Coffee",
    category: "coffee",
  })
// try to create the DB photos that was unsucsessful as of now //
  // await Coffee.update({name: 'Coffee'})
  // require('fs').readFile('coffee1.jpg', 'base64', async(err, data)=> {
  //   const imageUrl = `data:image/jpeg;base64,${data}`;
  //   await Coffee.update({imageUrl})
  // });

  const Cappuccino = await Product.create({
    name: "Cappuccino",
    imageUrl: "https://images.unsplash.com/photo-1582291734204-7a4dfa96871b",
    category: "coffee",
  })

  const Latte = await Product.create({
    name: "Latte",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "coffee",
  })

  const IcedCoffee = await Product.create({
    name: "Iced Coffee",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "coffee",
  })

  const IcedLatte = await Product.create({
    name: "Iced Latte",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "coffee",
  })

  const Espresso = await Product.create({
    name: "Espresso",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "coffee",
  })

  const ColdBrew = await Product.create({
    name: "Cold Brew",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "coffee",
  })


  const BlackTea = await Product.create({
    name: "Black Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "tea",
  })

  const IcedTea = await Product.create({
    name: "Iced Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "tea",
  })

  const GreenTea = await Product.create({
    name: "Green Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "tea",
  })

  const PeppermintTea = await Product.create({
    name: "Peppermint Tea",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "tea",
  })

  const Matcha = await Product.create({
    name: "Matcha",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "tea",
  })

  const IcedMatcha = await Product.create({
    name: "Iced Matcha",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "tea",
  })

  const GreenSmoothie = await Product.create({
    name: "Greens Smoothie",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "smoothie",
  })

  const StrawberryBananaSmoothie = await Product.create({
    name: "Strawberry Banana Smoothie",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "smoothie",
  })

  const ProteinSmoothie = await Product.create({
    name: "Protein Smoothie",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "smoothie",
  })

  const Tshirt = await Product.create({
    name: "T-Shirt",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "shirt",
  })

  const Hat = await Product.create({
    name: "Baseball hat",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "hat",
  })

  const Mug = await Product.create({
    name: "Logo Mug",
    imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
    category: "mug"
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
  LineItem
};