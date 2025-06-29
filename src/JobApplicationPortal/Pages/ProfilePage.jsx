import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const ProfilePage = () => {
  const [readOnly, toggleReadOnly] = useState(true);
  const userDetails = useContext(UserContext);
  const [updatedInfo, setUpdatedInfo] = useState({
    name: "Faiyaz Ansari",
    email: "faiyaz.ansari@gmail.com",
  });

  const inputStyle = {
    boxShadow: !readOnly ? "0 0 0 3px rgba(59, 130, 246, 0.5)" : "",
    padding: "6px",
    border: "none",
    marginLeft: "10px",
  };
  return (
    <div>
      <p>
        Name:
        <input
          style={inputStyle}
          type="text"
          value={updatedInfo.name}
          readOnly={readOnly}
          onChange={(e) =>
            setUpdatedInfo({
              ...updatedInfo,
              name: e.target.value,
            })
          }
        />
      </p>
      <p>
        Email:
        <input
          style={inputStyle}
          type="email"
          value={updatedInfo.email}
          readOnly={readOnly}
          onChange={(e) =>
            setUpdatedInfo({
              ...updatedInfo,
              email: e.target.value,
            })
          }
        />
      </p>

      <button
        onClick={() => (
          toggleReadOnly(!readOnly), userDetails.setUserInfo(updatedInfo)
        )}
      >
        {readOnly === true ? "Edit Profile" : "Save Profile"}
      </button>
    </div>
  );
};

export default ProfilePage;
