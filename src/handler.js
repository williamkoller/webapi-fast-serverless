'use strict';
const MongoClient = require('mongodb').MongoClient;
const { randomUUID } = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

const mongoUri = process.env.MONGO_URI;

module.exports.createData = async (event) => {
  const client = new MongoClient(mongoUri);

  await client.connect();
  const db = client.db('my-service');
  const collection = db.collection('my-collection');

  const jsonParse = JSON.parse(event.body);
  const data = {
    _id: randomUUID(),
    ...jsonParse,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await collection.insertOne(data);

  await client.close();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Data inserted successfully!',
    }),
  };
};
