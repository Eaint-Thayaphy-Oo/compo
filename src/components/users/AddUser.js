import React, { useState } from "react";

function AddUser(props) {
  const [uuid, setUuid] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cell, setCell] = useState("");

  const uuidChangeHandler = (event) => {
    setUuid(event.target.value);
  };

  const imageChangeHandler = (event) => {
    // console.log(event.target.value);
    setImage(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };

  const cellChangeHandler = (event) => {
    setCell(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let user = {
      uuid: uuid,
      name: name,
      image: image,
      phone: phone,
      cell: cell,
    };
    // console.log(user);
    props.addUser(user);
  };

  return (
    <div className="card bg-dark px-2 my-5">
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label htmlFor="uuid" className="form-label text-white">
            Uuid
          </label>
          <input
            type="text"
            class="form-control"
            id="uuid"
            onChange={uuidChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="image" className="form-label text-white">
            Image
          </label>
          <input
            type="tex"
            class="form-control"
            id="image"
            onChange={imageChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="name" className="form-label text-white">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            onChange={nameChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="phone" className="form-label text-white">
            Phone
          </label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            onChange={phoneChangeHandler}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="cell" className="form-label text-white">
            Cell
          </label>
          <input
            type="tel"
            class="form-control"
            id="cel"
            onChange={cellChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary float-end btn-sm mb-3">
          Create
        </button>
      </form>
    </div>
  );
}

export default AddUser;
