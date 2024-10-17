import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 9%;
  background: #192a3b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: 0.3s;
  .logo {
    text-decoration: none;
  }
  a {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    margin-left: 3.5rem;
    transition: 0.2s;
    font-family: "Poopins", sans-serif;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const NavBar = () => {
  return (
    <>
      <Header id="#">
        <Link className="logo" to="/">
          Logo
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/sing-up">Sing Up</Link>
        </nav>
      </Header>
    </>
  );
}
