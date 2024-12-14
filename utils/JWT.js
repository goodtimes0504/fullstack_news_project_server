const jsonwebtoken = require("jsonwebtoken");
const secret = "time is money";

const JWT = {
  generate(value, expires) {
    return jsonwebtoken.sign(value, secret, { expiresIn: expires });
  },
  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (error) {
      throw {
        code: error.name === "TokenExpiredError" ? 401 : 400,
        message: error.message,
      };
    }
  },
};
// const token = JWT.generate({ name: "admin" }, "3s");
// console.log(token);
// const testDecoded = JWT.verify(token);
// console.log(testDecoded);
// setTimeout(() => {
//   console.log(JWT.verify(token));
// }, 5000);
module.exports = JWT;
