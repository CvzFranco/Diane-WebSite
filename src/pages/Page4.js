import React from "react";
import styled from "styled-components";
import diane from "../img/dianep4.jpeg";
function Page4() {
  return (
    <Page4Styled>
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
      <div className="title">DECOUVERTE</div>
    </Page4Styled>
  );
}
const Page4Styled = styled.section`

position: relative;
  width: 100vw;
  height: 100vh;
  .text {
    position: absolute;
    top: 45%;
    right: 10%;
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
    top:8%;
    left: 6%;
    font-size: 15rem;
  }

  .photo {
      position:absolute;
      left:8%;
      bottom:10%;
    background-image: url(${diane});
      background-repeat: no-repeat;
      background-position:top;
      background-size: cover;
      z-index:1;
      width:450px;
      height:450px;
      filter: grayscale(100%);
      
      

    
    }
    .shadow {
    position: absolute;
    left: 10%;
    bottom: 12%;
    width: 450px;
    height: 450px;
    
    background-color:#ee002c3d;
    z-index:-100;
  }
  }`;
export default Page4;
