import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { getUser } from "./helper/userapicalls";


const UserDashboard = () => {
  const { user, token } = isAuthenticated();


  const [values, setValues] = useState({

    name: "",
    email: "",

  });
  const { name, email, } = values;
  useEffect(() => {
    preload();

  })

  const preload = () => {
    getUser(user, token)
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({ ...values, id: data._id, name: data.name, email: data.email })
        }
      })
      .catch(e => console.log(e))
  }


  const UserLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header">Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/user/update" className="nav-link text-aqua">
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const UserrightSide = () => {
    return (
      <div>
        <div className="card mb-4">
          <h4 className="card-header">User information</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="badge badge-warning mr-2">Name:</span>
              {name}
            </li>{" "}
            <li className="list-group-item">
              <span className="badge badge-warning mr-2">Email:</span>
              {email}
            </li>
            <li className="list-group-item">
              <span className="badge badge-danger">User area</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };



  return (
    <Base title="Welcome to User Dashboard"
    description="View/Update your details"
    className="container bg-info  p-4">
      <h1 className="text-center">Welcome {user.name}</h1>
      {/* //TODO: purchase List!  */}

      <div className="row">
        <div className="col-md-3">{UserLeftSide()}</div>
        <div className="col-md-9">{UserrightSide()}</div>
      </div>
    </Base>
  );
};

export default UserDashboard;

