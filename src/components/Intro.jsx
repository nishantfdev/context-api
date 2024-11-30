import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Intro() {
  let { user } = useContext(UserContext);
  if (!user) return <h1>You are not logged In.</h1>;
  return (
    <div className="flex gap-3 items-center mt-5">
      <img
        src={user.img}
        className="h-16 w-16 rounded-full bg-slate-600"
        alt=""
      />
      <div className="div">
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
}

export default Intro;
