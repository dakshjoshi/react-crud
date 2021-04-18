import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Context } from "./Context/Context";

export const EditUser = (props) => {
  const [users, setUsers] = useContext(Context);

  var name = users
    .map((a, i) => (a.id == props.match.params.id ? a.name : false))
    .filter((a) => a != false);

  var index = users
    .map((a, i) => (a.id == props.match.params.id ? i : false))
    .filter((a) => a != false);

  const { register, handleSubmit } = useForm({
    defaultValues: { name: name, id: props.match.params.id },
  });

  var INDEX = +index + 1;

  const Edit = (data, v) => {
    v.target.reset();
    users[INDEX - 1] = data;
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Edit)}>
        <h3> Edit User </h3>
        <label>New ID</label>
        <input
          type="text"
          name="id"
          placeholder="ID"
          className="col-3"
          ref={register}
        />
        <label>New Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="col-3"
          ref={register}
        />

        <input type="submit" className="btn btn-primary" />
        <Link to="/" className="btn">
          Cancel
        </Link>
      </form>
    </div>
  );
};
