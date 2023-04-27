const app = require('./app');
const { syncAndSeed } = require('./db');


const init = async()=> {
  try {
    await syncAndSeed(async() => {

      const Coffee = await Drink.create({
        name: "Coffee",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        defaultSize: 'SMALL', 
        isTea: FALSE,
        isHot: TRUE,  
      })

      const Cappucino = await Drink.create({
        name: "Cappucino",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        defaultSize: 'SMALL',
        isTea: FALSE,
        isHOT: TRUE,
      })

      const Latte = await Drink.create({
        name: "Cappucino",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        defaultSize: 'SMALL',
        isTea: FALSE,
        isHot: TRUE,
      })



      const Tea = await Drink.create({
        name: "Black Tea",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        defaultSize: 'SMALL',
        isTEA: TRUE,
        isHOT: TRUE,
      })

      const Tshirt = await Merch.create({
        name: "T-Shirt",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        defaultSize: 'SMALL',
      })


      });

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();



