import React from "react";
import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 3;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textSoft};
`;

const HR = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCouter = styled.span`
  /* margin-top: 5px; */
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.div`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: red;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 30px;
  height: max-content;
  padding: 10px 20px;
  margin-left: 70px;
  cursor: pointer;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/ZVElMDY6pkA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Detail>
          <Info>100,000 lượt xem • 1 giờ trước</Info>
          <Buttons>
            <Button>
              <AiFillLike />
              123
            </Button>
            <Button>
              <AiFillDislike />
              Dislike
            </Button>
            <Button>
              <IoMdShareAlt />
              Chia sẻ
            </Button>
            <Button>
              <RiMoneyDollarCircleLine />
              Cảm ơn
            </Button>
            <Button>
              <BsThreeDots />
            </Button>
          </Buttons>
        </Detail>
        <HR />
        <Channel>
          <ChannelInfo>
            <Image src="https://gstatic.gvn360.com/2021/06/Mot-vu-tru-moi_-19-1536x864.jpg" />
            <ChannelDetail>
              <ChannelName>
                Youtube<Subscribe>Đăng ký</Subscribe>
              </ChannelName>
              <ChannelCouter>100 N Người đăng ký</ChannelCouter>
              <Description>Hello </Description>
            </ChannelDetail>
          </ChannelInfo>
        </Channel>
        <HR />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
