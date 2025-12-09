// import React, { useState } from "react";
// import axios from "axios";
// const FetchApiComponent = () => {
//  const [data, setData] = useState([])
// const function1=async()=>{
//   let urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/users",
//   ];
//   let promises = urls.map((item) => fetch(item).then((res) => res.json()));
//   let data = await Promise.all(promises);
//   setData(data);
// }
// // const FetchApiComponent = () => {
// //   const [data, setData] = useState([]);
// //   const fun1 = async () => {
// //     const response = await axios("https://jsonplaceholder.typicode.com/users");
// //     setData(response.data);
// //     // console.log("The data from api:", data);
// //   };
//   return (
//     <div>
//       <h1>API Fetch</h1>
//       {
//         data.length === 0 ? (
//           <>
//           <button onClick={function1}>Fetch Data</button>
//          <h1>No data is existing</h1>
//          </>
//         ) : (
//             data.map((item)=>{
//                 return (
//                     <div key={item.id} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
//                         <h2>{item.name}</h2>
//                         <p>{item.email}</p>
//                         <p>{item.phone}</p>
//                     </div>
//                 )
//             })
//         )

//       }
//     </div>
//   );
// };
// export default FetchApiComponent;

import React, { useState } from "react";

const FetchApiComponent = () => {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [dummyUsers, setDummyUsers] = useState([]);

  // 1st
  const fetchUsers1 = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    setUsers1(data);
  };

  // 2nd
  const fetchUsers2 = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    setUsers2(data);
  };

  // 3rd
  const fetchProducts = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    setProducts(data.products);
  };

  // 4th
  const fetchTodos = async () => {
    let res = await fetch("https://dummyjson.com/todos");
    let data = await res.json();
    setTodos(data.todos);
  };

  // 5th
  const fetchDummyUsers = async () => {
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    setDummyUsers(data.users);
  };

  return (
    <div>
      <h1>Fetch APIs</h1>
      <button onClick={fetchUsers1}>Fetch Users API 1</button> <br></br> <br />
      <button onClick={fetchUsers2}>Fetch Users API 2</button> <br></br> <br />
      <button onClick={fetchProducts}>Fetch Products API</button> <br></br>{" "}
      <br />
      <button onClick={fetchTodos}>Fetch Todos API</button> <br></br> <br />
      <button onClick={fetchDummyUsers}>
        Fetch Dummy Users API
      </button> <br></br> <br />
      <h2>Users API 1</h2>
      {users1.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
      <h2>Users API 2</h2>
      {users2.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
      <h2>Products</h2>
      {products.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
      <h2>Todos</h2>
      {todos.map((t) => (
        <p key={t.id}>{t.todo}</p>
      ))}
      <h2>Dummy Users</h2>
      {dummyUsers.map((u) => (
        <p key={u.id}>
          {u.firstName} {u.lastName}
        </p>
      ))}
    </div>
  );
};

export default FetchApiComponent;
