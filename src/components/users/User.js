import React from "react";

function User({ data, remove }) {
  const handleRemove = () => {
    remove(data.uuid);
  };
  return (
    <div className="row mb-2">
      <div className="col-3">
        <img src={data.image} width="100px" height="100px" />
      </div>
      <div className="col-5">
        <strong>Ph:{data.phone}</strong>
        <br />
        <strong>Cell:{data.cell}</strong>
      </div>
      <div className="col-3">
        <h3>{data.name}</h3>
      </div>
      <div className="col-1">
        <button className="btn btn-danger btn-sm mt-2" onClick={handleRemove}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default User;
