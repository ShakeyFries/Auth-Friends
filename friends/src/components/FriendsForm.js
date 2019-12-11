import { React, useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

function FriendsForm ({ getData }) {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");

  const addFriend = {
    id: id,
    name: name,
    age: age,
    email: email
  };

  return (
    <>
      <h1>Add Friends!</h1>
      <input
        onChange={e => setName(e.target.value)}
        value={name}
        placeholder="Name..."
      />
      <input
        onChange={e => setAge(e.target.value)}
        value={age}
        placeholder="Age..."
      />
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
        placeholder="E-mail..."
      />
      <button
        onClick={e => {
          e.preventDefault();
          setId(Date.now());
          axiosWithAuth()
            .post("/friends", addFriend)
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log(err);
            });
          setName("");
          setAge();
          setEmail("");
          getData();
        }}> Add </button>
     
    </>
  );
}
export default FriendsForm;
