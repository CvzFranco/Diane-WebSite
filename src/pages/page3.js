import React from "react";
import styled from "styled-components";
import diane from "../img/dianepink.png";

function page3() {
  return (
    <Page3Styled>
      <div className="text">
        <div className="date">25-09-2017</div>
        <div className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          magnam aperiam nesciunt mollitia debitis, assumenda est saepe
          voluptatem deserunt numquam excepturi, qui dicta doloremque unde at
          cum nostrum, dignissimos enim? Temporibus ipsam molestias dolorum.
          Magni tenetur iure tempora culpa est quod! Accusamus voluptates ipsa,
          molestias sint earum molestiae optio nemo?
        </div>
      </div>
      <div className="photo"></div>
      <div className="shadow"></div>
      <div className="title">DIANE</div>
    </Page3Styled>
  );
}
const Page3Styled = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  .text {
    position: absolute;
    top: 10%;
    left: 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 37%;
    height: 45%;

    .date {
      font-size: 6rem;
    }

    .para {
      font-size: 1rem;
    }
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 40%;
    font-size: 15rem;
  }

  .photo {
      position:absolute;
      right:12%;
      top:10%;
    background-image: url(${diane});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index:1;
      width:600px;
      height:600px;
      border-radius:50%;
      

    
    }
    .shadow {
    position: absolute;
    right: 13%;
    top: 11%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color:#f7daf2;
    z-index:-100;
  }
  }
`;
export default page3;
