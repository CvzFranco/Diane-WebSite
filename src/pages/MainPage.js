import React, { useState } from "react";
import FirstYear from "./FirstYear";
import Home from "./Home";
import styled from "styled-components";
import Menu from "../components/Menu";

function MainPage() {
  const [menuToggled, setMenuToggled] = useState(false);
  return (
    <MainPageStyled>
      <Home />
      <FirstYear />
      <div className="menu-container">
        <MenuStyled>
          <div className="menu__container">
            <div className="menu__hidden">
              <MenuDeploy menuToggled={menuToggled}>
                <Menu />
              </MenuDeploy>
            </div>
            <MenuFigure menuToggled={menuToggled}>
              <div className="menu__list">
                <div className="menu__item" id="page">
                  01-00
                </div>
                <div className="menu__item">
                  <Button
                    menuToggled={menuToggled}
                    className="button__container"
                    onClick={() => setMenuToggled(!menuToggled)}
                  >
                    <div className="button__item"></div>
                    <div className="button__item"></div>
                    <div className="button__item"></div>
                  </Button>
                </div>
                <div className="menu__item">BIENVENUE</div>
              </div>
              <div className="line"></div>
            </MenuFigure>
          </div>
        </MenuStyled>
      </div>
    </MainPageStyled>
  );
}

const MainPageStyled = styled.section`
  position: relative;
  .menu-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const MenuStyled = styled.div`
  height: 100%;
  left: 30px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  .menu__container {
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    .menu__list {
      height: 80vh;
      width: 60px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      #page {
        font-size: 1.2rem;
      }

      .menu__item {
        transform: rotate(-90deg);
      }
    }
  }

  .menu__decoration {
    height: 87vh;
    width: 1px;
    background-color: white;
    position: absolute;
    right: 0;
    top: 51%;
    transform: translateY(-50%);
  }
`;

const MenuDeploy = styled.div`
  height: 100vh;
  overflow: hidden;
  width: ${({ menuToggled }) => (menuToggled ? "1920px" : "0")};
  transition: all 1.5s ease-in;
  background-color: white;
  overflow: hidden;

  .coucou {
    font-size: 5rem;
    text-align: center;
  }
`;
const MenuFigure = styled.div`
  color: white;
  height: 100vh;
  left: 2%;
  transform: translateX(${({ menuToggled }) => (menuToggled ? "1830px" : "0")});
  color: ${({ menuToggled }) => (menuToggled ? "#000" : "white")};
  position: absolute;
  transition: all 1.5s ease-in;
  .line {
    height: 87vh;
    width: 1px;
    background-color: ${({ menuToggled }) => (menuToggled ? "#000" : "white")};
    transition: all 1.5s ease-in;
    position: relative;
    left: ${({ menuToggled }) => (menuToggled ? "-40px" : "40px")};
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Button = styled.div`
  width: 75px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  .button__item {
    width: 75px;
    height: 1px;
    background-color: ${({ menuToggled }) => (menuToggled ? "#000" : "white")};
    transition: all 1.5s ease-in;
  }
`;
export default MainPage;
