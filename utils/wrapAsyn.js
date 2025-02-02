// utils/wrapAsync.js
module.exports = (fn) => {
  return function (req, res, next) {
    // If the async function throws an error, it will be passed to the next error handler
    fn(req, res, next).catch(next);
  };
};
