import React, { useContext } from "react";
import { Context } from "./Context/Context";
import { useForm } from "react-hook-form";
import { Home } from "./Home";
import { Link } from "react-router-dom";

export const AddUser = (props) => {
  const [users, addUser] = useContext(Context);

  const { register, handleSubmit } = useForm();

  const OnSubmit = (data, v) => {
    v.target.reset();
    users.push(data);
    addUser(users);
    props.history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="mb-3">
          <h3>Add User</h3>
          <input
            type="text"
            name="id"
            placeholder="ID"
            className="col-3 mt-2"
            ref={register}
          />
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="col-3 mt-2  mr-1"
            ref={register}
          />
        </div>

        <input className="btn btn-dark" type="submit"></input>

        <Link to="/" className="btn">
          Cancel
        </Link>
      </form>
    </div>
  );
};
