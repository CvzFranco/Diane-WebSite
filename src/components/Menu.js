import React, { useEffect } from "react";
import styled from "styled-components";
import one from "../img/dianeone.jpeg";
import two from "../img/dianetwo.jpeg";
import three from "../img/dianethree.jpeg";
import four from "../img/dianefour.jpg";
import six from "../img/diane6.jpeg";
import seven from "../img/diane7.jpeg";
import eight from "../img/diane8.jpeg";
import nine from "../img/diane9.jpeg";
import ten from "../img/diane10.jpeg";
import eleven from "../img/diane11.jpeg";

function Menu() {
  useEffect(() => {
    const images = document.querySelectorAll(".menu__item-img");
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const handleImage = (e) => {
      images.forEach(function (image) {
        image.style.top = e.clientY + 600 - sizes.height + "px";
        image.style.left = -e.clientX - 650 + sizes.width + "px";
      });
    };
    window.addEventListener("mousemove", handleImage);
    document.querySelectorAll(".menu__item-link").forEach((link) => {
      link.addEventListener("mouseover", handleImage);
    });
  }, []);

  return (
    <MenuStyled>
      <div className="container">
        <div className="menu__item">
          <div className="menu__item-link">
            <a href="" className="menu__item-link" id="one">
              ENERGIQUE
            </a>
            <img src={six} alt="" className="menu__item-img" />
          </div>
        </div>
        <div className="menu__item">
          <div className="menu__item-link">
            <a href="" className="menu__item-link hover" id="two">
              CURIEUSE
            </a>
            <img src={nine} alt="" className="menu__item-img" />
          </div>
        </div>
        <div className="menu__item">
          <div className="menu__item-link">
            <a href="" className="menu__item-link" id="three">
              {" "}
              BOUDEUSE
            </a>
            <img src={seven} alt="" className="menu__item-img" />
          </div>
        </div>
        <div className="menu__item">
          <div className="menu__item-link">
            <a href="" className="menu__item-link" id="four">
              TAQUINE
            </a>
            <img src={eleven} alt="" className="menu__item-img" />
          </div>
        </div>
      </div>
    </MenuStyled>
  );
}
const MenuStyled = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 7vw;
  }

  .menu__item-link {
    cursor: pointer;
    color: red;
    transition: opacity 0.4s;
    height: 100%;
    width: 100%;
  }

  .menu__item-link:hover {
    transition-duration: 0.3s;
    opacity: 1;
  }

  .menu__item-img {
    pointer-events: none;
    position: absolute;
    height: 50vh;
    max-height: 400px;
    opacity: 0;
    transition: top 500ms ease-out;
    transition: left 500ms ease-out;
    //transform: translate3d(calc(-100% - 6vw), -30%, 0) translate3d(0, 20px, 0);
  }

  .menu__item-link:hover {
    .menu__item-img {
      opacity: 1;
      //transform: translate3d(calc(-100% - 6vw), -30%, 0) rotate3d(0, 0, 1, 4deg);
      transition: 0.5s ease-out;
    }
  }

  .menu__item-link:hover {
    animation-play-state: running;
    opacity: 1;
    transition-duration: 0.4s;

    .menu__item-link {
      white-space: nowrap;
      font-size: 7vw;
      padding: 0 1vw;
      line-height: 1.15;
    }
  }

  #one {
    color: black;
    :hover {
      color: #fdffb6;
    }
  }
  #two {
    color: black;
    :hover {
      color: #caffbf;
    }
  }
  #three {
    color: black;
    :hover {
      color: #9bf6ff;
    }
  }
  #four {
    color: black;
    :hover {
      color: #bdb2ff;
    }
  }
`;
export default Menu;
