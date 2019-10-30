import Layout from '../components/Layout';
import Grid from '../components/Grid';

const fakeUsers = [
  {
    id: "1",
    fullName: "Carlos Drumond de Andrade",
    country: "Brazil",
    createdBy: "1991-05-23T14:19:51",
    email: "carlos@invalid.name"
  },
  {
    id: "2",
    fullName: "Maria Drumond de Andrade",
    country: "Brazil",
    createdBy: "1991-05-23T14:19:51",
    email: "mario@kinvalid.name"
  }
]

const fakeEventInstances = [
  {
    id: 1,
    eventName: "Community Group",
    name: "Mitte 2019",
    startAt: "1991-05-23T14:19:51"
  }
]

const memberLabels = ["Id","FullName","Country","Created at","Email"]
const eventInstanceLabels = ["ID", "Event Name", "Name", "Starts at"]

const Index = () => (
    <Layout>
      <h2>Event Instances</h2>
      <Grid labels={eventInstanceLabels} data={fakeEventInstances}/>
      <h2>Members</h2>
      <Grid labels={memberLabels} data={fakeUsers}/>
    </Layout>
  );

  export default Index;
