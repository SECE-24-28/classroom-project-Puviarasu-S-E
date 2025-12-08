import React, { useState } from "react";
const AdditionOperationComponent = () => {
  const [fruites, setFruits] = useState(["apple", "banana"]);
  const addFruites = () => {
    setFruits([...fruites, "mango"]);
    setFruits([...fruites, "grapes"]);
    // setFruits
    console.log("The fruits:", fruites);
  };
  return (
    <div>
      <button onClick={addFruites}>Add Fruits</button>
    </div>
  );
};
export default AdditionOperationComponent;
