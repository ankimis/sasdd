import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import { Fragment } from "react";
import Head from "next/head";

export default function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        ></meta>
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const username = encodeURIComponent("ankit_mishra");
  const password = encodeURIComponent("Ankit123");
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.va03s.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // console.log("result", meetups);
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}
export async function getStaticProps(context) {
  console.log("meetupId", context.params);
  const meetupId = context.params.meetupId;
  console.log("meetupId", meetupId);

  /// fetch data from api / file System
  const username = encodeURIComponent("ankit_mishra");
  const password = encodeURIComponent("Ankit123");
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.va03s.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetups = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  // console.log("result", meetups);
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
        description: selectedMeetups.description,
      },
    },
  };
}
