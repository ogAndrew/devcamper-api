// @desc 
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocal}://${req.get("host")}${req.originalUrl}`
  );
};

module.exports = logger;
