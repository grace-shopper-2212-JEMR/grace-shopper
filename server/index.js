try{
  require('../env.js');
}
catch(ex){
  console.log('running locally? Add an env.js file with client_id and client_secret')
  console.log('deploying? Add a client_id and client_secret environment variable ')
  console.log(ex);
}
console.log(process.env.client_id)

const app = require('./app');
app.engine('html', require('ejs').renderFile);
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



