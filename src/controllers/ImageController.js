const dynamo = require('../database');
const TABLE_NAME = 'images';

const params = {
  TableName: TABLE_NAME,
};

class ImageController {
  async index(req, res) {
    const images = await dynamo.scan(params).promise();

    return res.json(images);
  }

  async store(req, res) {
    const { url, id } = req.body;
    const img = {
      id,
      url_image: url,
    };

    params.Item = img;

    const image = await dynamo.put(params).promise();

    return res.json(image);
  }

  async show(req, res) {
    const { id } = req.params;

    const Key = {
      id,
    };

    params.Key = Key;

    const image = await dynamo.get(params).promise();

    return res.json(image);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const Key = {
      id,
    };

    params.Key = Key;

    try {
      await dynamo.delete(params).promise();

      return res.json({ message: 'Image deleted!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new ImageController();
