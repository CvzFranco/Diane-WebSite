import React, { useState, useEffect } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Home from "./Home";
import styled from "styled-components";
import Menu from "../components/Menu";
import Page3 from "./page3";
import Page4 from "./Page4";

function MainPage() {
  const [menuToggled, setMenuToggled] = useState(false);
  useEffect(() => {
    init();

    var g_containerInViewport;
    function init() {
      setStickyContainersSize();
      bindEvents();
    }

    function bindEvents() {
      window.addEventListener("wheel", wheelHandler);
    }

    function setStickyContainersSize() {
      document
        .querySelectorAll(".sticky-container")
        .forEach(function (container) {
          const stikyContainerHeight =
            container.querySelector("main").offsetWidth * 4 +
            window.innerHeight;
          container.setAttribute(
            "style",
            "height: " + stikyContainerHeight + "px"
          );
        });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= 0 && rect.bottom > document.documentElement.clientHeight
      );
    }

    function wheelHandler(evt) {
      const containerInViewPort = Array.from(
        document.querySelectorAll(".sticky-container")
      ).filter(function (container) {
        return isElementInViewport(container);
      })[0];

      if (!containerInViewPort) {
        return;
      }

      var isPlaceHolderBelowTop =
        containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom =
        containerInViewPort.offsetTop + containerInViewPort.offsetHeight >
        document.documentElement.scrollTop;
      let g_canScrollHorizontally =
        isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if (g_canScrollHorizontally) {
        containerInViewPort.querySelector("main").scrollLeft += evt.deltaY;
      }
    }
  }, []);
  return (
    <MainPageStyled>
      <div class="vertical-section">
        <Home />
      </div>
      <div class="sticky-container">
        <main>
          <section>
            <Page3 />
          </section>
          <section>
            <Page4 />
          </section>

          <section>
            <h1>Boooom</h1>
          </section>
          <section>
            <h1>The End</h1>
          </section>
        </main>
      </div>
      <div class="vertical-section">Content Below</div>
      <div class="sticky-container">
        <main>
          <section>
            <h1>Beep</h1>
          </section>
          <section>
            <h1>Boop</h1>
          </section>
          <section>
            <h1>Boooom</h1>
          </section>
          <section>
            <h1>The End</h1>
          </section>
        </main>
      </div>
      <div className="menu-container">
        <MenuStyled>
          <div className="menu__container">
            <div className="menu__hidden">
              <MenuDeploy menuToggled={menuToggled}>
                <div className="opacity">
                  <Menu />
                </div>
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
  .vertical-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    overflow-x: hidden;
    display: flex;
    position: sticky;
    top: 0;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  section {
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4ch;
  }
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
  overflow-x: hidden;
  width: ${({ menuToggled }) => (menuToggled ? "1920px" : "0")};

  transition: all 1.5s ease-in;
  background-color: white;
  overflow: hidden;
  .opacity {
    background: white;
    opacity: ${({ menuToggled }) => (menuToggled ? "1" : "0")};
    transition: all 1.1s ease-in;
    transition-delay: ${({ menuToggled }) => (menuToggled ? "1.5s" : "0")};
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
