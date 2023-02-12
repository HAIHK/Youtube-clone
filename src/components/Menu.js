import React from "react";
import styled from "styled-components";
import LogoYoutube from "../images/images.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
`;

const Sidebar = styled.div`
  font-size: 21px;
  padding-right: 20px;
  padding-top: 0px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const Img = styled.img`
  height: 20px;
`;

const Span = styled.span`
  font-size: 10px;
  font-weight: bold;
  padding-left: 5px;
  color: gray;
`;
const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar>
          <FaBars />
        </Sidebar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={LogoYoutube} />
          </Logo>
        </Link>
        <Span>VN</Span>
      </Wrapper>
    </Container>
  );
};

export default Menu;
