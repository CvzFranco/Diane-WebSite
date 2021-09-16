import React from "react";
import styled from "styled-components";
import bg from "../img/diane1.jpg";

function Home() {
  return (
    <HomeStyled>
      <div className="text__left">
        <div className="text__age">
          <h3>4</h3>
          <p>Ans / Years / Jahre</p>
        </div>
        <div className="date">
          <h1>09-2021</h1>
        </div>
        <div className="name">
          <div className="prenom">
            <h1>DIANE CHIAVUZZO</h1>
          </div>
          <div className="nom">
            <h1></h1>
          </div>
        </div>
      </div>
    </HomeStyled>
  );
}
const HomeStyled = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh; /* responsive height */
  position: relative;
  .text__left {
    position: absolute;
    height: 93%;
    left: 7%;
    top: 7%;
    z-index: 0;

    .text__age {
      color: white;
      z-index: -1;
      h3 {
        font-size: 5rem;
      }
    }
    .date {
      position: absolute;
      top: 27%;
      color: white;
      font-size: 6rem;
      width: 500px;
    }
    .name {
      display: flex;
      flex-direction: column;
      position: absolute;
      color: white;

      top: 63%;
      font-size: 7rem;
    }
  }
`;
export default Home;
