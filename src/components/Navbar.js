import React from "react";
import styled from "styled-components";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsFillKeyboardFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  margin-left: 565px;
  cursor: pointer;
`;

const Boxmic = styled.div`
  padding-left: 15px;
  color: ${({ theme }) => theme.text};
`;
const BOX = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Search = styled.div`
  height: 30px;
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin-left: 130px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 30px 0px 0px 30px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  height: 35px;
  width: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 9px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonSearch = styled.button`
  width: 70px;
  height: 42px;
  border-radius: 0px 30px 30px 0px;
  border: none;
  cursor: pointer;
`;

const Boxvideo = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;
const Boxbell = styled.div`
  margin-right: 15px;
`;
const Boxlogin = styled.div`
  margin-right: 10px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Search>
            <Input placeholder="Tìm Kiếm" />
            <BsFillKeyboardFill />
          </Search>
          <ButtonSearch>
            <BsSearch />
          </ButtonSearch>
          <Boxmic>
            <BsFillMicFill />
          </Boxmic>
        </Box>
        <BOX>
          <Boxvideo>
            <BiVideoPlus />
          </Boxvideo>
          <Boxbell>
            <BsBell />
          </Boxbell>
          <Boxlogin>
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <MdOutlineAccountCircle />
                ĐĂNG NHẬP
              </Button>
            </Link>
          </Boxlogin>
        </BOX>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
