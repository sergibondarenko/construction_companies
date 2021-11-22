function requestLogger(req, res, next) {
  console.log(new Date(), req.method, req.url, req.params, req.body);
  next();
}

module.exports = { requestLogger };
