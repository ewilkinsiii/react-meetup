import React from "react";
import { userHistory } from 'react-router-dom';
import NewMeetupFrom from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewMeetupPage = () => {
    const history = useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch('ENTER URL HERE.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        });
    };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
    </section>
  );
};

export default NewMeetupPage;
