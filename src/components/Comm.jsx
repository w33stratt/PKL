import "./develop.scss";

import styled from "styled-components";


const Container  = styled.div`
  min-width: 100px;
  padding: 7px 10px;
  margin-left: 300px;
  margin-right: 60px;
  margin-top: -10px;
  text-align: center;
  position: relative;
  right: 120px;
  border-radius: 5px;
  border: none;
  background: rgb(162, 196, 255);
  color: black;
  font-size: 20px;
  cursor: pointer;
`;
export default function Develop() {
  

  return (
    <div className="develop" id="develop">
      <div className="left">
        <div className="imgContainer">
        <img src="images/comunityy.jpg" alt="" />
        <div className="wrapper">
        </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <br></br>
        <br></br>
        <br></br>
        
      
          <h1>COMMUNITY LITERACY
</h1>
          <h3>One of our strengths is community empowerment. We are passionate about improving literacy through training and workshops. Acquire new knowledge and skills about various information related to environment, disasters and climate change. This initiative is at the same time to increase community resilience in facing hazard, thus they could decrease the losses and damages. We are also experienced in helping organize institutional events for knowledge transfer.
<br></br><br></br><h1>Webinar / Seminar
</h1><br></br>
<Container>International Webinar related to Ocean and Climate Change</Container>
<br></br>
<br></br>
<Container>National Seminar about Disaster Recovery (BNPB) <br></br>Webinar Series about Environment and Climate Change</Container>
<br></br>
<br></br>
<Container>National Seminar about Disaster (CERDASTALK)</Container>
<br></br>
<br></br>
<Container>SI-Klik (Sains Informasi dan Literasi Komunitas)<br></br>webinar series related to environment, disaster, and climate change</Container>
<br></br>
<br></br>

</h3>
<br></br>

</div>
        
       
        </div>
      </div>
  );
}
