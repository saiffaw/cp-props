import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h2>{props.fullName}</h2>
      <h1>{props.bio} </h1>
      <p> {props.profession}</p>

      {props.children}
      <button
        onClick={() => props.handleName(`heloo ${props.fullName}`)}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        {" "}
        clik me
      </button>
    </div>
  );
};

export default Profile;
