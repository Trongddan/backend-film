const jwt = require("jsonwebtoken");
const middleware = {
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, "dankenvil", (err, user) => {
        if (err) {
          res.status(403).json("token is not valid");
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).json("you are not permision");
    }
  },
  verifyTokenAdmin:(req,res,next)=>{
      middleware.verifyToken(req,res,()=>{
          if(req.user.id == req.params.id || req.user.admin){
              next();
          }else{
              res.status(403).json("you're not allowed")
          }
      })
  }
};
module.exports = middleware;
