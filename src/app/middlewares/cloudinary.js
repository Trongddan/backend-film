
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "danken",
  api_key: "846398224493679",
  api_secret: "_Fo8njvT5V1_2ly2XA5SPsxgmqc",
});
module.exports = cloudinary;