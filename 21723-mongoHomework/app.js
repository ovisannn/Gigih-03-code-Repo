import { MongoClient } from 'mongodb';

const agg = [];
const client = await MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('spofify').collection('songs');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();

console.log(result)