const conn = require('./conn');
const User = require('./User');
const  Product  = require('./Product');
const  Review  = require('./Review');
const Order = require('./Order');
const LineItem  = require('./LineItem');

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product); 
Product.hasMany(Review)
Review.belongsTo(Product)
Review.belongsTo(User)

//const [moe, lucy, larry, foo, bar, bazz, ethyl] = 
const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  try {
    const [moe, larry, lucy, ethyl, admin] = await Promise.all([
    
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    User.create({ username: 'admin', password: 'admin', adminStatus: true }),

  ]);
  
  const JavaMug = await Product.create({ 
    name: "Java Mug", 
    imageUrl: "https://images.unsplash.com/photo-1682986501364-d4d746b3a49b", 
    category: "mug",
    description:'Our high-quality mugs are designed with one of our cafe logos and are perfect for enjoying your favorite coffee or tea in the comfort of your home or office.',
    price: 15.00,
  });
  
  const ScriptForJavaMug = await Product.create({ 
    name: "Script For Java Mug", 
    imageUrl: "https://images.unsplash.com/photo-1682987528534-b07d285d1cd1", 
    category: "mug",
    description:'Our high-quality mugs are designed with one of our cafe logos and are perfect for enjoying your favorite coffee or tea in the comfort of your home or office.',
    price: 15.00,
  });
  
  const Coffee = await Product.create({
    name: "Coffee",
    imageUrl: 'https://i.ibb.co/kmqWxwc/coffees.jpg',
    category: "coffee",
    description: 'Our freshly brewed coffee is made from premium roasted beans and served hot with the option to select any variety of milks or sugars.',
    price: 4.00,
  });
  

  const Cappuccino = await Product.create({
    name: "Cappuccino",
    imageUrl: "https://images.unsplash.com/photo-1513175112772-985b903e3fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    category: "coffee",
    description: 'A classic Italian espresso-based drink, made with a shot of espresso, steamed milk, and a layer of velvety frothed milk on top.',
    price: 6.00,
  });

  const Latte = await Product.create({
    name: "Latte",
    imageUrl: "https://miro.medium.com/v2/resize:fit:828/0*DGNIpvHTN_EWoAGI",
    category: "coffee",
    description: 'A smooth and creamy espresso-based drink, made with a shot of espresso, steamed milk, and a thin layer of froth on top.',
    price: 6.00, 
  });

  const IcedCoffee = await Product.create({
    name: "Iced Coffee",
    imageUrl: "https://cdn.shopify.com/s/files/1/2103/9669/articles/singleserve_macchiato_1024x1024.jpg?v=1657604587",
    category: "coffee",
    description: ' Our chilled and refreshing coffee is brewed strong and served over ice, perfect for a hot summer day.',
    price: 5.00,
  });

  const IcedLatte = await Product.create({
    name: "Iced Latte",
    imageUrl: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    category: "coffee",
    description: 'A delicious and creamy iced coffee drink made with a shot of espresso, chilled milk, and served over ice.',
    price: 7.00,
  });

  const Espresso = await Product.create({
    name: "Espresso",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "coffee",
    description: 'A single shot of premium quality espresso, perfect for a quick and powerful caffeine boost.',
    price: 4.00,
  });

  const ColdBrew = await Product.create({
    name: "Cold Brew",
    imageUrl: "https://images.squarespace-cdn.com/content/v1/57fa9cafe4fcb5e6ab28144a/1675806609584-PVRIP5A9LOJHWIM5ISFD/organic+cold+brew?format=1500w",
    category: "coffee",
    description: 'Our signature cold brew is steeped overnight for a smooth and full-bodied taste, served over ice for a refreshing experience.',
    price: 6.00,
  });

  const BlackTea = await Product.create({
    name: "Black Tea",
    imageUrl: "https://images.unsplash.com/photo-1606163017137-888c0177b3dd",
    category: "tea",
    description: 'A classic and bold tea, served hot with the option to add milk or sweetener to taste.',
    price: 4.00,
  });

  const IcedTea = await Product.create({
    name: "Iced Tea",
    imageUrl: "https://images.unsplash.com/photo-1654923064639-834d2bf32716",
    category: "tea",
    description: 'Our iced tea is made from freshly brewed tea, chilled and served over ice, with a variety of flavors to choose from.',
    price: 4.00,
  });

  const GreenTea = await Product.create({
    name: "Green Tea",
    imageUrl: "https://images.unsplash.com/photo-1622480916113-9000ac49b79d",
    category: "tea",
    description: 'A light and delicate tea, made from freshly steeped green tea leaves, perfect for those who prefer a milder taste.',
    price: 5.00,
  });

  const PeppermintTea = await Product.create({
    name: "Peppermint Tea",
    imageUrl: "https://images.unsplash.com/photo-1655252205284-4b184957de44",
    category: "tea",
    description: 'Our refreshing peppermint tea is made from freshly brewed peppermint leaves, great for soothing digestion and cooling down.',
    price: 5.00,
  });

  const Matcha = await Product.create({
    name: "Matcha",
    imageUrl: "https://cdn.shopify.com/s/files/1/0285/0082/0054/products/matcha_madness_4f1fd621-8f16-43ad-a27a-9997b4071e0d_900x.jpg?v=1660066856",
    category: "tea",
    description: 'A traditional Japanese tea made from finely ground green tea leaves, served with a frothy layer of milk for a creamy and satisfying experience.',
    price: 7.00,
  });

  const IcedMatcha = await Product.create({
    name: "Iced Matcha",
    imageUrl: "https://images.unsplash.com/photo-1617892165107-76fb45f50f7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    category: "tea",
    description: 'Our iced matcha is a refreshing and delicious drink made with chilled matcha powder and milk, served over ice for a sweet and creamy taste.',
    price: 7.00,
  });

  const GreenSmoothie = await Product.create({
    name: "Greens Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1557753478-d111aef068be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80",
    category: "smoothie",
    description: 'Our refreshing green smoothie is made with fresh spinach, kale, apple, banana, and honey for a delicious and healthy way to start your day.',
    price: 9.00,
  });

  const StrawberryBananaSmoothie = await Product.create({
    name: "Strawberry Banana Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1586707101133-4f0c4ce4e554",
    category: "smoothie",
    description: 'Our classic smoothie is made with ripe strawberries, sweet banana, and a touch of honey, blended with almond milk for a creamy and satisfying drink.',
    price: 9.00,
  });

  const ProteinSmoothie = await Product.create({
    name: "Protein Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1645783916385-1c99860a2a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    category: "smoothie",
    description: 'Our protein-packed smoothie is made with a blend of whey protein, banana, almond milk, and peanut butter for a nutritious and delicious drink that will keep you fueled throughout the day.',
    price: 9.00,
  });

  const Tshirt = await Product.create({
    name: "T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1682989375635-ca9058719432",
    category: "shirt",
    description: 'Our soft and comfortable t-shirts are made from high-quality materials, featuring our cafe logo and a stylish design to show off your love for our coffee.',
    price: 15.00,
  });

  const Hat = await Product.create({
    name: "Baseball hat",
    imageUrl: "https://images.unsplash.com/photo-1682992992053-2a7a52b82db4",
    category: "hat",
    description: 'Our adjustable hats are perfect for sunny days and are embroidered with our cafe logo, providing a stylish accessory for your coffee runs and outdoor activities.',
    price: 1.00,
  });


const reviews = [
  {
    subject: 'Love this place!',
    description: 'This is the best coffee I have ever had!',
    rating: 10,
    userId: moe.id,
    productId: Coffee.id
  },
  {
    subject: 'Always a long line',
    description: 'My cold brew coffee is great everytime, but I hate waiting in the long line, so I order ahead now for faster service.',
    rating: 7,
    userId: larry.id,
    productId: ColdBrew.id
  },
  {
    subject: 'Big Smile from my barista',
    description: 'The best barista in the morning. I always get greeted by name.',
    rating: 9,
    userId: lucy.id,
    productId: Latte.id
  }
];

await Promise.all(reviews.map(async (review) => {
  const newReview = await Review.create(review);
  const product = await Product.findByPk(review.productId);
  await newReview.setProduct(product);
}));


  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: bazz, quantity: 3});
  await ethyl.addToCart({ product: foo, quantity: 2});
  return {
    users: {
      moe,
      lucy,
      larry,
      ethyl,
      admin
    }
  } 
}catch(error){
   console.log(error) 
}
}


module.exports = {
  syncAndSeed,
  User,
  Product,
  LineItem,
  Order,
  Review
};
