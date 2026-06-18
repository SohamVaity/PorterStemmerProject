import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 10px 40px;
  align-items: center;
  font-weight: 600;
  position: relative;    
  z-index: 10;   
  
`;

const Links = styled.div`
  a {
    color: white;
    margin-left: 18px;
    text-decoration: none;
    font-weight: 1000;
    position: relative;
    z-index: 10;
    font-size: 1.4rem;

    &:hover {
      color: #aa82ffff;
      transition: 0.3s ease-in-out;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <div className="header" style={{ display: "flex", alignItems: "center",zIndex: 1 }}>
        <Link to="/" style={{ display: "flex", alignItems: "center",zIndex: 1 }}>
          <img src="/img/Logo.png" alt="logo" style={{ height: 100, cursor: "pointer",zIndex: 1 }} />
        </Link>
        {/* <h1 style={{ padding: "0px 20px", margin: 0, fontSize: "2.2rem", fontWeight: 700, color: "#fff",zIndex: 1 }}>
          Porter Stemmer Algorithm
        </h1> */}
      </div>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">Details</Link>  
        <Link to="/MadeBy">About Us</Link>
      </Links>
    </Nav>
  );
}

export default Navbar;
