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
          <img src="images/ssurvey.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <br></br>
        <br></br>
        <br></br>
        
          <h1>FIELD SURVEY
</h1>
          <h3>Project research and evaluation cannot be separated from data requirements. Often, the work requires data that must be validated in the field. For these needs, we are also experienced in field surveys. We can work together with local communities to carry out data collection in remote areas. This is also one of our ways to involve a lot of resources and increase community empowerment.
          <br></br>
<br></br>
<br></br>
<Container>Climate change projection and variability</Container>
<br></br>
<br></br>
<Container>Remote sensing and geographic information system (GIS)</Container>
<br></br>
<br></br>
<Container>Hydrological and meteorological survey</Container>
<br></br>
<br></br>
<Container>Environmental quality survey</Container>
<br></br>
<br></br>
<Container>Community Survey</Container>
<br></br>
<br></br>
</h3>
<br></br>

</div>
        
       
        </div>
      </div>
  );
}
