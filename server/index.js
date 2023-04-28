const app = require('./app');
const { syncAndSeed } = require('./db');


const init = async()=> {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));

    await syncAndSeed();

    console.log('data seeded')
  }
  catch(ex){
    console.log(ex);
  }
};

init();



