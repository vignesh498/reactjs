import Card from "../Components/ui/Card";
import NewMeetupForm from "../Components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetupPage() {
  const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
    fetch(
      "https://react-test-app-129dd-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
        navigate('/',{replace:true});
    });
  }

  return (
    <div>
      <Card>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Card>
    </div>
  );
}
export default NewMeetupPage;
