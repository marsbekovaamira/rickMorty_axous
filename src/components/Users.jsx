import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const { data } = await axios(API);
    console.log(data);
    setUser(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1>Users Page</h1>
      {user.map((elem) => (
        <Link className="link" to={`/users/${elem.id}`} key={elem.id}>
          <li>{elem.name}</li>
        </Link>
      ))}
    </div>
  );
};

export default Users;
