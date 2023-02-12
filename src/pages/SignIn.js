import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 20px 50px;
  border: 1px solid ${({ theme }) => theme.soft};
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;
const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Đăng nhập</Title>
        <SubTitle>Hãy nhập thông tin</SubTitle>
        <Input placeholder="Tên đăng nhập" />
        <Input type="password" placeholder="Mật khẩu" />
        <Button>Đăng nhập</Button>
        <Title>Or</Title>
        <Input placeholder="Tên đăng ký" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Mật khẩu" />
        <Button>Đăng ký</Button>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
