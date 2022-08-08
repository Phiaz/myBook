const cloudinary = require("cloudinary").v2;

const {
  CLOUD_NAME,
  CLOUD_API_KEY,
  CLOUD_API_SECRET,
} = require("./key");

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});


var self = module.exports = {
 uploadSingle: (file) => {
      return new Promise(resolve => {
          cloudinary.uploader.upload(file, {
                  folder: 'single'
              })
              .then(result => {
                  if (result) {
                      const fs = require('fs')
                      fs.unlinkSync(file)
                      resolve({
                          url: result.secure_url
                      })
                  }
              })
      })
  },
}
