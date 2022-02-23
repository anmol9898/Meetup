import { useHistory } from "react-router-dom";
import NewMeetupForm from "../Components/Meetups/NewMeetupForm";

function NewMeetupPage() {
  // function to add data to firebase or mongo db database cloud
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-c84d5-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    // history.push("/"); // makes a stack of pages one onto another 
    });
  }
  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
