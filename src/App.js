import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./components/users/User";
import AddUser from "./components/users/AddUser";

function App() {
  // let users = [
  //   {
  //     id: 1,
  //     image:
  //       "data:image/png;base64,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",
  //     phone: "09123456",
  //     cell: "09876543",
  //     name: "Mg Mg",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  //     phone: "764384",
  //     cell: "35454",
  //     name: "Aye Aye",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg",
  //     phone: "34356",
  //     cell: "67879",
  //     name: "Su Su",
  //   },
  // ];

  // let [count, setCount] = useState(users.length);
  // let [count, setCount] = useState(0);
  // const [name, setName] = useState("Mg Mg");
  let [users, setUsers] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        let rawUsers = users.results;
        let filteredUsers = rawUsers.map((usr) => {
          return {
            uuid: usr.login.uuid,
            name: `${usr.name.title} ${usr.name.first} ${usr.name.last}`,
            phone: usr.phone,
            cell: usr.cell,
            image: usr.picture.thumbnail,
          };
        });
        // console.log(filteredUsers);
        setUsers(filteredUsers);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeUserHandler = (uuid) => {
    // console.log(uuid);
    let remainUsers = users.filter((usr) => usr.uuid != uuid);
    setUsers(remainUsers);
  };

  const showFormHandler = () => {
    setShowForm(!showForm);
  };

  const addUserHandler = (user) => {
    // console.log("log from parent", user);
    let newUsers = [user, ...users];
    setUsers(newUsers);
    setShowForm(!showForm);
  };

  return (
    <>
      <div className="container my-5">
        {/* <div>
          <h1>{count}</h1>
          <button
            className="btn btn-info btn-sm mb-5"
            onClick={() => {
              setCount(++count);
              console.log("Count is", count);
            }}
          >
            Change
          </button>
        </div>
        <div>
          <h1>{name}</h1>
          <button
            className="btn btn-info btn-sm mb-5"
            onClick={() => {
              setName(name == "Mg Mg" ? "Aung Aung" : "Mg Mg");
            }}
          >
            Change
          </button>
        </div> */}
        {/* <User
          image={users[0].image}
          phone={users[0].phone}
          cell={users[0].cell}
          name={users[0].name}
        /> */}
        {/* <User data={users[0]} /> user.js mhr props pyy pee props.data.image */}
        <h1 className="text-center my-5 text-info">Our Employee</h1>
        <button
          className="btn btn-primary btn-sm my-2"
          onClick={showFormHandler}
        >
          Add User
        </button>
        {showForm && <AddUser addUser={addUserHandler} />}
        {users.map((usr) => (
          <User data={usr} key={usr.uuid} remove={removeUserHandler} />
        ))}
      </div>
    </>
  );
}

export default App;
