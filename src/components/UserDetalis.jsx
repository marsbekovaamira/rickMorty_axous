import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import { useParams } from "react-router-dom";

const UserDetalis = () => {
  const { id } = useParams();
  console.log(id);
  const [user, setUser] = useState("");
  const getUser = async () => {
    const { data } = await axios(`${API}/${id}`);
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.status}</h2>
      <h3>{user.species}</h3>
      <img src={user.image} />
    </div>
  );
};

export default UserDetalis;
