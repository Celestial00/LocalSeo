const Logger = (req, res, next) => {
  console.log(`Req Url is ${req.url} Req Method is ${req.method} `);
  next()
};

module.exports = Logger;
