import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

const Header = () => {
  const userDetails = useContext(UserContext);

  return (
    <div
      style={{
        padding: 10,
        borderBottom: "1px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginRight: 10,
          background: "lightGreen",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "1.1rem",
        }}
      >
        Welcome,
        <span
          style={{ fontWeight: "bold" }}
        >{` ${userDetails.userInfo.name}`}</span>
        <br /> {userDetails.userInfo.email}
      </div>
      <div>
        <button style={{ marginRight: 15, fontWeight: "bold" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </button>
        <button style={{ marginRight: 15, fontWeight: "bold" }}>
          <Link to="/applicationsList" style={{ textDecoration: "none" }}>
            Applications
          </Link>
        </button>

        <button style={{ marginRight: 15, fontWeight: "bold" }}>
          <Link to="/profilePage" style={{ textDecoration: "none" }}>
            Profile
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
