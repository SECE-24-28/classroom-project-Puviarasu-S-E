import React, { useState } from "react";
import "./fetch-api-component.css";

const FetchApiComponent = () => {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [products, setProducts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [dummyUsers, setDummyUsers] = useState([]);

  const fetchUsers1 = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers1(await res.json());
  };

  const fetchUsers2 = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    setUsers2(await res.json());
  };

  const fetchProducts = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    setProducts(data.products);
  };

  const fetchTodos = async () => {
    let res = await fetch("https://dummyjson.com/todos");
    let data = await res.json();
    setTodos(data.todos);
  };

  const fetchDummyUsers = async () => {
    let res = await fetch("https://dummyjson.com/users");
    let data = await res.json();
    setDummyUsers(data.users);
  };

  return (
    <div className="api-container">
      <h1>API Data Fetcher</h1>

      <div className="button-group">
        <button onClick={fetchUsers1}>Fetch Users API 1</button>
        <button onClick={fetchUsers2}>Fetch Users API 2</button>
        <button onClick={fetchProducts}>Fetch Products</button>
        <button onClick={fetchTodos}>Fetch Todos</button>
        <button onClick={fetchDummyUsers}>Fetch Dummy Users</button>
      </div>

      <div className="section">
        <h2>Users API 1</h2>
        <div className="card-list">
          {users1.map((u) => (
            <div className="card" key={u.id}>
              <h3>{u.name}</h3>
              <p>{u.email}</p>
              <p>{u.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Users API 2</h2>
        <div className="card-list">
          {users2.map((u) => (
            <div className="card" key={u.id}>
              <h3>{u.name}</h3>
              <p>{u.email}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Products</h2>
        <div className="card-list">
          {products.map((p) => (
            <div className="card" key={p.id}>
              <h3>{p.title}</h3>
              <p>Price: ${p.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Todos</h2>
        <div className="card-list">
          {todos.map((t) => (
            <div className="card" key={t.id}>
              <p>{t.todo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Dummy Users</h2>
        <div className="card-list">
          {dummyUsers.map((u) => (
            <div className="card" key={u.id}>
              <h3>
                {u.firstName} {u.lastName}
              </h3>
              <p>Email: {u.email}</p>
              <p>Age: {u.age}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetchApiComponent;
