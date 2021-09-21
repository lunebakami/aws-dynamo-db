const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
});

module.exports = new AWS.DynamoDB.DocumentClient();
// const TABLE_NAME = 'images';

// const getImages = async () => {
//   const params = {
//     TableName: TABLE_NAME,
//   };

//   const images = await dynamoClient.scan(params).promise();
//   console.log(images);
//   return images;
// };

// const addOrUpdateImage = async (image) => {
//   const params = {
//     TableName: TABLE_NAME,
//     Item: image,
//   };

//   return await dynamoClient.put(params).promise();
// };

// const getImageById = async (id) => {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: {
//       id,
//     },
//   };

//   const image = await dynamoClient.get(params).promise();
//   console.log(image);
//   return image;
// };

// const deleteImage = async (id) => {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: {
//       id,
//     },
//   };

//   return await dynamoClient.delete(params).promise();
// };
// addOrUpdateImage({
//   id: '0',
//   url_image: '/test.jpg',
// });

// getImageById('0');
