import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../assets/pakricornlogo1.png";

const Nav = styled.div`
  position: fixed !important;
  top: 0;
  margin-left: 250px;
  width: 85%;
  background: #34495e;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #34495e;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "0")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState("false");

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="home-bg">
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          {/* <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon> */}
          <h1
            style={{
              // textAlign: "right",
              // marginLeft: "200px",
              fontSize:"1.2rem",
              color:"white",


            }}
          >
            PAKRICORN TECHNO SOLUTIONS
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <div style={{}}>
              <img
                src={logo}
                className="logo"
                alt="logo"
                style={{
                  height: "38px",
                  width: "220px",
                  marginLeft: "15px",
                  marginRight: "10px",
                  marginTop: "",
                }}
              />
            </div>
            {/* <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
