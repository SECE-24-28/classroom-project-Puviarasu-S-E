import React, { useState } from "react";

const UsestateformComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitthings = () => {
    
    console.log("The name is :", name);
    console.log("The email is :", email);
  };

  return (
    <div>
      <h1>Use State Form Component</h1>

      <form onSubmit={submitthings}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={handleEmailChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UsestateformComponent;
