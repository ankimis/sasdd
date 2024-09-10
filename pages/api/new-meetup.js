import { MongoClient  } from "mongodb";
export default async function handler(req, res) {

const username = encodeURIComponent("ankit_mishra");
const password = encodeURIComponent("Ankit123");
    console.log('req', req)
  if (req.method === "POST") {
    const data = req.body;
    console.log('data', data);
    const client = await MongoClient.connect(
      `mongodb+srv://${username}:${password}@cluster0.va03s.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log("result", result);
    client.close();
    res.status(201).json({message:'Meetup Inserted!'});
  }
}
