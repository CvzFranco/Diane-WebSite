import React, { useEffect } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import diane from "../img/dianepink.png";
import Page1 from "./Page1";
import Page2 from "./Page2";

import Home from "./Home";

function Test() {
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
    <TestStyled>
      <div class="vertical-section">
        <Home />
      </div>
      <div class="sticky-container">
        <main>
          <section>
            <Page1 />
          </section>
          <section>
            <Page2 />
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
    </TestStyled>
  );
}
const TestStyled = styled.section`
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

  .read-article {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
    color: #000;
    background: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: arial;
    text-decoration: none;
    box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px,
      rgb(0 0 0 / 30%) 0 0 60px -15px;
  }
  .read-article:hover {
    background: #d5d5d5;
    box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px,
      rgb(0 0 0 / 30%) 0 0 60px 0px;
  }
  iframe[sandbox] .read-article {
    display: none;
  }
`;
export default Test;
