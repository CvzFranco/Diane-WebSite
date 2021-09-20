import React, { useEffect } from "react";
import styled from "styled-components";
import diane from "../img/dianepink.png";
function Page1() {
  return (
    <Page1Styled>
      <div className="first-page">
        <div className="left">
          <div className="text-container">
            <div className="date">
              <h1>09-2021</h1>
            </div>
            <div className="title">
              <h1>NAISSANCE</h1>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                quia minima provident officiis quibusdam perspiciatis, officia,
                reprehenderit laudantium, perferendis cum sequi! Nobis placeat,
                quos rerum in temporibus tenetur illum quas ipsa numquam autem,
                esse dolore aut cumque a doloribus sit quibusdam, exercitationem
                consequatur dolores deleniti non aspernatur? Dolorem illo
                asperiores, quam maxime iure quaerat beatae deleniti autem
                dignissimos minima rem pariatur fuga numquam ipsam iusto est
                mollitia eos sapiente vero suscipit adipisci quos magnam eaque.
                Dignissimos temporibus sapiente, quo, dolorum beatae esse amet
                vel ex repudiandae ut facere. Voluptate assumenda aspernatur,
                delectus corrupti nesciunt sint necessitatibus nobis deserunt
                hic harum mollitia dolorem laborum vel architecto, neque aperiam
                modi, illo qui ducimus optio! Dolor quae perferendis eius velit,
                magni, at aperiam sint assumenda quibusdam tempore, excepturi
                dolores ullam sed itaque tempora soluta omnis nulla nostrum esse
                explicabo? A porro quidem aperiam, aliquam consequatur natus
                corporis praesentium voluptatum maiores, odio, possimus veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </Page1Styled>
  );
}

const Page1Styled = styled.section`
  display: flex;
  overflow: hidden;
  .first-page {
    display: flex;
    width: 100vw;
    height: 100vh;
    .left {
      background-color: #ececee;
      width: 50%;
      height: 100%;
      position: relative;

      .text-container {
        position: absolute;
        left: 15%;
        height: 100%;

        .date {
          position: absolute;
          top: 3%;
          color: black;
          font-size: 7rem;
          width: 500px;
        }
        .title {
          position: absolute;
          top: 20%;
          color: white;
          font-size: 8rem;
          width: 1500px;
        }
        .text {
          position: absolute;
          width: 700px;
          height: 100px;
          top: 53%;
          font-size: 1rem;
        }
      }
    }

    .right {
      background-image: url(${diane});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 50%;
      height: auto;
    }
  }
`;
export default Page1;
