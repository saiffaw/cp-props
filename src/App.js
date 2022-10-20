import Profile from "./profile/Profile";
import React from "react";
import img1 from "./profile/Capture.PNG";

function App() {
  const handleName = (fullName) => {
    alert(fullName);
    console.log(fullName);
  };

  return (
    <div>
      <Profile
        fullName="saif eddine harhouri"
        bio=" full stack js devolppper"
        profession="engenieur"
        handleName={handleName}
      >
        <img
          src={img1}
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
          alt=""
        />
      </Profile>
    </div>
  );
}

export default App;
