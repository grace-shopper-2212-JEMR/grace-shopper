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
    imageUrl: 'https://images.unsplash.com/photo-1525480122447-64809d765ec4',
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
    imageUrl: "https://images.unsplash.com/photo-1513175112772-985b903e3fa5",
    category: "coffee",
  })

  const Latte = await Product.create({
    name: "Latte",
    imageUrl: "https://images.unsplash.com/photo-1517705708367-762e7e2eee6c",
    category: "coffee",
  })

  const IcedCoffee = await Product.create({
    name: "Iced Coffee",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    category: "coffee",
  })

  const IcedLatte = await Product.create({
    name: "Iced Latte",
    imageUrl: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1",
    category: "coffee",
  })

  const Espresso = await Product.create({
    name: "Espresso",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    category: "coffee",
  })

  const ColdBrew = await Product.create({
    name: "Cold Brew",
    imageUrl: "https://images.unsplash.com/photo-1558122104-355edad709f6",
    category: "coffee",
  })


  const BlackTea = await Product.create({
    name: "Black Tea",
    imageUrl: "https://images.unsplash.com/photo-1606163017137-888c0177b3dd",
    category: "tea",
  })

  const IcedTea = await Product.create({
    name: "Iced Tea",
    imageUrl: "https://images.unsplash.com/photo-1654923064639-834d2bf32716",
    category: "tea",
  })

  const GreenTea = await Product.create({
    name: "Green Tea",
    imageUrl: "https://images.unsplash.com/photo-1622480916113-9000ac49b79d",
    category: "tea",
  })

  const PeppermintTea = await Product.create({
    name: "Peppermint Tea",
    imageUrl: "https://images.unsplash.com/photo-1655252205284-4b184957de44",
    category: "tea",
  })

  const Matcha = await Product.create({
    name: "Matcha",
    imageUrl: "https://images.unsplash.com/photo-1565117661210-fd54898de423",
    category: "tea",
  })

  const IcedMatcha = await Product.create({
    name: "Iced Matcha",
    imageUrl: "https://images.unsplash.com/photo-1617892165107-76fb45f50f7c",
    category: "tea",
  })

  const GreenSmoothie = await Product.create({
    name: "Greens Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1557753478-d111aef068be",
    category: "smoothie",
  })

  const StrawberryBananaSmoothie = await Product.create({
    name: "Strawberry Banana Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1586707101133-4f0c4ce4e554",
    category: "smoothie",
  })

  const ProteinSmoothie = await Product.create({
    name: "Protein Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1645783916385-1c99860a2a42",
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