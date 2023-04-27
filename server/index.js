const app = require('./app');
const { syncAndSeed } = require('./db');



const init = async()=> {
  try {
    await syncAndSeed( async() => {

      const Coffee = await Drink.create({
        name: "Coffee",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        size: 'SMALL', 
        isTea: FALSE,
        isHot: TRUE,  
      })

      const Tea = await Drink.create({
        name: "Black Tea",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        size: 'SMALL',
        isTEA: FALSE,
        isHOT: TRUE,
      })

      const Tshirt = await Merch.create({
        name: "T-Shirt",
        imageUrl: "https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png",
        size: 'SMALL',
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



