// import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { AiFillHome } from "react-icons/ai";
import { BsFillFilePlayFill } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { GiMusicSpell } from "react-icons/gi";
import { GiTrophyCup } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { MdLightMode } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  flex: 1.5;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  position: sticky;
  top: 0;
`;

const SBar = styled.div`
  padding: 10px 20px;
  height: 100vh;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
    border-radius: 3px;
  }
`;

const HR = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.h2`
  font-size: 15px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h5``;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 50px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}>
            <Menu />
            <SBar>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>
                  <AiFillHome />
                  Trang chủ
                </Item>
              </Link>
              <Item>
                <BsFillFilePlayFill />
                Shorts
              </Item>
              <Item>
                <BsCollectionPlay />
                Kênh đăng ký
              </Item>
              <HR />
              <Item>
                <CgPlayButtonR />
                Thư viện
              </Item>
              <Item>
                <BsClockHistory />
                Video đã xem
              </Item>
              <Item>
                <AiOutlineClockCircle />
                Xem sau
              </Item>
              <Item>
                <AiFillLike />
                Video đã thích
              </Item>
              <HR />
              <Link to="signin" style={{ textDecoration: "none" }}>
                <Login>Đăng nhập tại đây</Login>
                <Button>
                  <MdOutlineAccountCircle />
                  ĐĂNG NHẬP
                </Button>
              </Link>
              <HR />
              <Title>KÊNH ĐĂNG KÝ</Title>
              <Item>
                <GiMusicSpell />
                Âm nhạc
              </Item>
              <Item>
                <GiTrophyCup />
                Thể thảo
              </Item>
              <Item>
                <BsNewspaper />
                Trò chơi
              </Item>
              <Item>
                <AiFillFire />
                Tin tức
              </Item>
              <Item onClick={() => setDarkMode(!darkMode)}>
                <MdLightMode />
                {darkMode ? "Light" : "Dark"} Mode
              </Item>
            </SBar>
          </Sidebar>
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
