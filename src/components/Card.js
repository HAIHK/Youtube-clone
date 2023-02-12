import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "240px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "110px" : "170px")};
  background-color: red;
  border-radius: 10px;
  flex: 1;
`;

const Detail = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: ${(props) => props.type !== "sm" && "12px"};
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://thefunkyball.com/images/nhac-remix-bay-lac-1.jpeg"
        />
        <Detail type={type}>
          <ChannelImage
            type={type}
            src="https://gstatic.gvn360.com/2021/06/Mot-vu-tru-moi_-19-1536x864.jpg"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Youtube</ChannelName>
            <Info>100 N Lượt xem • 1 giờ trước</Info>
          </Texts>
        </Detail>
      </Container>
    </Link>
  );
};

export default Card;
