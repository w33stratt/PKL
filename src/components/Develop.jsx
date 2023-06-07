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
          <img src="images/development.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
       
        <br></br>
        <br></br>
        <br></br>
       
          <h1>PROJECT & RESEARCH DEVELOPMENT
</h1><br></br>
          <h3>We work on both academic and non-academic project research. 
In academic, we focus on issues related to the environment, disasters and climate change. Meanwhile, non-academic research is mostly carried out in the social and community sectors which are in line with these three main issues. Research and programs collaborate with various government agencies, NGOs, donor agencies, and grassroots through local communities.
<br></br>
<br></br>
<Container>Environmental document formulation <br></br>(AMDAL, RPPLH, KLHS, and others)</Container>
<br></br>
<br></br>
<Container>Environmental Analysis and Modelling</Container>
<br></br>
<br></br>
<Container>Climate Change Vulnerability, Risk<br></br>Impact and Adaptation (CCVIA) Assessment</Container>
<br></br>
<br></br>
<Container>Hazard and Disaster Management</Container>
<br></br>
<br></br>
<Container>Policy Assessment and Analysis</Container>
<br></br>
<br></br>
<Container>Community empowerment</Container>
<br></br>
<br></br>
</h3>
</div>
        
       
        </div>
      </div>
  );
}
