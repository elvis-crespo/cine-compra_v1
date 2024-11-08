import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
   position: fixed;
  width: 100%;
  height: 75px;
  background: #192a3b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  z-index: 100;
  // box-shadow: 0 0 10px #5cfaff, 0 0 20px #5cfaff, 0 0 40px #5cfaff,
  //   0 0 80px #5cfaff;
  .logo {
    img {
      width: 140px;
      border-radius: 5%;
      border: 2px solid #5cfaff;
      background: #192a3b;
    }
  }
  .links {
    a {
      text-decoration: none;
      font-family: "Poppins", sans-serif;
      margin: 0 15px;
      font-size: 14px;
      color: white;
      background: #192a3b;
    }
    a:hover {
      border-bottom: 0.5mm solid rgb(100, 100, 100);
    }

    .primary {
      background: #fff;
      color: black;
      padding: 7px 20px;
      border-radius: 5mm;
    }
    .primary:hover {
      background: rgb(100, 100, 100);
      color: white;
      border: none;
    }
  }
`;

export const NavBar = () => {
  return (
    <>
      <Header id="#">
        <div className="logo">
          <Link to={"/"}>
            <img src="/public/1.jpg" alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/sing-up" className="primary">
            Sing Up
          </Link>
        </div>
          </Header>
    </>
  );
}
