// ParentComponent.js
import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleFormSubmit(number) {
    // Do something with the submitted number if needed
    console.log("Submitted number:", number);
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <DisplayData firstName={firstName} lastName={lastName} />
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="Enter first name"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Enter last name"
      />
    </div>
  );
}

export default App;
