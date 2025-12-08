import React from "react";
//import PropsChildComponent from "./PropsChildComponent";
// const PropsPractice = (props) => {
//   return (
//     <div>
//       <h1>Heading</h1>
//       <div>{props.name}</div>
//       <div>{props.mobile}</div>
//     </div>
//   );
// };
const PropsPractice = ({ name, mobile }) => {
  return (
    <div>
      <h1>Heading</h1>
      <div>{name}</div>
      <div>{mobile}</div>
    </div>
  );
};
export default PropsPractice;