import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import Form from "./Form";
import axios from "axios";
import * as yup from "yup";

const initialFormValues = {

  username: "",
  email: "",
  role: "",
  civil: "",
  hiking: false,
  reading: false,
  coding: false,
};
const initialFormErrors = {
  username: "",
  email: "",
  role: "",
  civil: "",
};
const initialFriends = [];
const initialDisabled = true;

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled);

 
  const getFriends = () => {

    axios
      .get("http://buddies.com/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const postNewFriend = (newFriend) => {
    axios
      .post("http://buddies.com/api/friends", newFriend)
      .then((res) => {
        setFriends([res.data, ...friends]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
  };

  const inputChange = (name, value) => {


    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),

      hobbies: ["coding", "reading", "hiking"].filter(
        (hobby) => formValues[hobby]
      ),
    };
 
    postNewFriend(newFriend);
  };


  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lambda Eats</h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {friends.map((friend) => {
        return <Friend key={friend.id} details={friend} />;
      })}
    </div>
  );
}
