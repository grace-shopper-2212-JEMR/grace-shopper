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
    const [moe, larry, lucy, ethyl] = await Promise.all([
    
    User.create({ username: 'moe', password: '123' }),
    User.create({ username: 'lucy', password: '123' }),
    User.create({ username: 'larry', password: '123' }),
    User.create({ username: 'ethyl', password: '123' }),
    
  ]);

  const [foo, bar, bazz] = await Promise.all([
    Product.create({ name: 'foo', category: "shirt" }),
    Product.create({ name: 'bar', category: "hat"  }),
    Product.create({ name: 'bazz', category: "mug"  }),
  ]);
  
  const JavaMug = await Product.create({ 
    name: "Java Mug", 
    imageUrl: "https://images.unsplash.com/photo-1682986501364-d4d746b3a49b", 
    category: "mug",
    description:'Our high-quality mugs are designed with one of our cafe logos and are perfect for enjoying your favorite coffee or tea in the comfort of your home or office.'
  });
  
  const ScriptForJavaMug = await Product.create({ 
    name: "Script For Java Mug", 
    imageUrl: "https://images.unsplash.com/photo-1682987528534-b07d285d1cd1", 
    category: "mug",
    description:'Our high-quality mugs are designed with one of our cafe logos and are perfect for enjoying your favorite coffee or tea in the comfort of your home or office.'
  });
  
  const Coffee = await Product.create({
    name: "Coffee",
    imageUrl: 'https://images.unsplash.com/photo-1525480122447-64809d765ec4',
    category: "coffee",
    description: 'Our freshly brewed coffee is made from premium roasted beans and served hot with the option to select any variety of milks or sugars.',
  });
  

  const Cappuccino = await Product.create({
    name: "Cappuccino",
    imageUrl: "https://images.unsplash.com/photo-1513175112772-985b903e3fa5",
    category: "coffee",
    description: 'A classic Italian espresso-based drink, made with a shot of espresso, steamed milk, and a layer of velvety frothed milk on top.',
  })

  const Latte = await Product.create({
    name: "Latte",
    imageUrl: "https://images.unsplash.com/photo-1517705708367-762e7e2eee6c",
    category: "coffee",
    description: 'A smooth and creamy espresso-based drink, made with a shot of espresso, steamed milk, and a thin layer of froth on top.',
  })

  const IcedCoffee = await Product.create({
    name: "Iced Coffee",
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    category: "coffee",
    description: ' Our chilled and refreshing coffee is brewed strong and served over ice, perfect for a hot summer day.',
  })

  const IcedLatte = await Product.create({
    name: "Iced Latte",
    imageUrl: "https://images.unsplash.com/photo-1534414671319-4fc58cc112e1",
    category: "coffee",
    description: 'A delicious and creamy iced coffee drink made with a shot of espresso, chilled milk, and served over ice.',
  })

  const Espresso = await Product.create({
    name: "Espresso",
    imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    category: "coffee",
    description: 'A single shot of premium quality espresso, perfect for a quick and powerful caffeine boost.',
  })

  const ColdBrew = await Product.create({
    name: "Cold Brew",
    imageUrl: "https://images.unsplash.com/photo-1558122104-355edad709f6",
    category: "coffee",
    description: 'Our signature cold brew is steeped overnight for a smooth and full-bodied taste, served over ice for a refreshing experience.',
  })

  const BlackTea = await Product.create({
    name: "Black Tea",
    imageUrl: "https://images.unsplash.com/photo-1606163017137-888c0177b3dd",
    category: "tea",
    description: 'A classic and bold tea, served hot with the option to add milk or sweetener to taste.',
  })

  const IcedTea = await Product.create({
    name: "Iced Tea",
    imageUrl: "https://images.unsplash.com/photo-1654923064639-834d2bf32716",
    category: "tea",
    description: 'Our iced tea is made from freshly brewed tea, chilled and served over ice, with a variety of flavors to choose from.',
  })

  const GreenTea = await Product.create({
    name: "Green Tea",
    imageUrl: "https://images.unsplash.com/photo-1622480916113-9000ac49b79d",
    category: "tea",
    description: 'A light and delicate tea, made from freshly steeped green tea leaves, perfect for those who prefer a milder taste.',
  })

  const PeppermintTea = await Product.create({
    name: "Peppermint Tea",
    imageUrl: "https://images.unsplash.com/photo-1655252205284-4b184957de44",
    category: "tea",
    description: 'Our refreshing peppermint tea is made from freshly brewed peppermint leaves, great for soothing digestion and cooling down.',
  })

  const Matcha = await Product.create({
    name: "Matcha",
    imageUrl: "https://images.unsplash.com/photo-1565117661210-fd54898de423",
    category: "tea",
    description: 'A traditional Japanese tea made from finely ground green tea leaves, served with a frothy layer of milk for a creamy and satisfying experience.',
  })

  const IcedMatcha = await Product.create({
    name: "Iced Matcha",
    imageUrl: "https://images.unsplash.com/photo-1617892165107-76fb45f50f7c",
    category: "tea",
    description: 'Our iced matcha is a refreshing and delicious drink made with chilled matcha powder and milk, served over ice for a sweet and creamy taste.',
  })

  const GreenSmoothie = await Product.create({
    name: "Greens Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1557753478-d111aef068be",
    category: "smoothie",
    description: 'Our refreshing green smoothie is made with fresh spinach, kale, apple, banana, and honey for a delicious and healthy way to start your day.',
  })

  const StrawberryBananaSmoothie = await Product.create({
    name: "Strawberry Banana Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1586707101133-4f0c4ce4e554",
    category: "smoothie",
    description: 'Our classic smoothie is made with ripe strawberries, sweet banana, and a touch of honey, blended with almond milk for a creamy and satisfying drink.',
  })

  const ProteinSmoothie = await Product.create({
    name: "Protein Smoothie",
    imageUrl: "https://images.unsplash.com/photo-1645783916385-1c99860a2a42",
    category: "smoothie",
    description: 'Our protein-packed smoothie is made with a blend of whey protein, banana, almond milk, and peanut butter for a nutritious and delicious drink that will keep you fueled throughout the day.',
  })

  const Tshirt = await Product.create({
    name: "T-Shirt",
    imageUrl: "https://images.unsplash.com/photo-1682989375635-ca9058719432",
    category: "shirt",
    description: 'Our soft and comfortable t-shirts are made from high-quality materials, featuring our cafe logo and a stylish design to show off your love for our coffee.',
  })

  const Hat = await Product.create({
    name: "Baseball hat",
    imageUrl: "https://images.unsplash.com/photo-1682992992053-2a7a52b82db4",
    category: "hat",
    description: 'Our adjustable hats are perfect for sunny days and are embroidered with our cafe logo, providing a stylish accessory for your coffee runs and outdoor activities.',
  })


  // console.log(`seeded ${seedReviews.length} reviews`)

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
      larry
    },
    products: {
      foo,
      bar,
      bazz
    }
  } 
}catch(error){
   console.log(error) 
}
}
// console.log('db index', console.log(syncAndSeed()))

module.exports = {
  syncAndSeed,
  User,
  Product,
  LineItem,
  Order,
  Review
};
