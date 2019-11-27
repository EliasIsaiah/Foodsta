// see google drive for aws creds
// Load the SDK and UUID
const AWS = require("aws-sdk");
const uuid = require("uuid");
require("dotenv").config();

// Create a promise on S3 service object
AWS.config.update({
  accessKeyId: process.env.aws_access_key_id,
  secretAccessKey: process.env.aws_secret_access_key,
  region: "us-east-1"
});

function addPhoto(req, res) {
  const imageName = uuid.v4() + "_" + req.file.originalname;
  const file = req.file;

  // res.send(`received image ${imageName}`);

  const photoObjectParams = {
    params: {
      Bucket: "foodsta",
      Key: imageName,
      Body: file.buffer,
      ACL: "public-read"
    }
  };

  // Use S3 ManagedUpload class as it supports multipart uploads
  const upload = new AWS.S3.ManagedUpload(photoObjectParams);

  const promise = upload.promise();

  promise
    .then(
      function(data) {
        console.log("Successfully uploaded photo.");
        res.send(data);
      },
      function(err) {
        console.log("There was an error uploading your photo: ", err.message);
      }
    )
    .catch(err => {
      throw err;
    });
}

module.exports = addPhoto;
