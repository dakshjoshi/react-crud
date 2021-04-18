import React, { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { Context } from "./Context/Context";
import "./specialCss.css";

export const UserList = (props) => {
  const [users, setUser] = useContext(Context);

  //DELETE LOGIC
  const RemoveUser = (i) => {
    var abc = users.filter((a, m) => m != i);
    setUser(abc);
  };

  return (
    <ListGroup className="col-6" id="UserLists">
      {users.map((user, i) => (
        <ListGroupItem className="d-flex" key={i}>
          {user.name}
          <div className="ml-auto">
            <Link
              to={`/edit/${user.id}`}
              className="btn btn-warning mr-1"
              id="btn"
            >
              {console.log(user.id)}
              Edit
            </Link>
            <Button
              className="btn btn-danger"
              id="btn"
              value={user.id}
              onClick={() => RemoveUser(i)}
            >
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
