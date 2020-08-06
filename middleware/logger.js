const moment = require("moment");

const logger = (req, res, next) => {
  const reqMethod = req.method;
  const reqURL = req.url;
  const currentTime = moment().format();

  console.log(
    `A ${reqMethod} request was made to the '${reqURL}' route at ${currentTime}`
  );

  next();
};

module.exports = logger;
