const { User } = require('../db');

//prof code
const isLoggedIn = async(req, res, next) => {
  try {
  const user = await User.findByToken(req.headers.authorization)
  req.user = user;
  next();
  }
  catch(ex){
    next (ex)
  }
}

module.exports = {
  isLoggedIn
};

