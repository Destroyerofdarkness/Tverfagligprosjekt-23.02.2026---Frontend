const getData = require("../handlers/getDataHandler");

const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    const data = await getData(`/verifyJwt/${token}`)
    if (data.success) {
      next();
    } else {
      res.redirect("/loggInn");
    }
  } else {
    res.redirect("/loggInn");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    const data = await getData(`/sendBackUser/${token}`)
    if (data.user) {
      res.locals.user = data.user;
      console.log(data);
      next();
    } else {
      res.locals.user = null;
      next();
    }
  } else {
    res.locals.user = null;
    next();
  }
};
module.exports = { authenticate, checkUser };
