import "./develop.scss";

import styled from "styled-components";
export default function Develop() {
  

  

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

  return (
    <div className="develop" id="develop">
      <div className="left">
        <div className="imgContainer">
          <img src="images/20943853.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
        <br></br>
        <br></br>
        <br></br>
       
          <h1>PROJECT EVALUATION
</h1><br></br>

          <h3>Apart from developing new research and projects, we are able to carry out program evaluations. We are experienced in conducting assessments / evaluations on various programs or projects in line with environmental, disaster and climate change issues. Evaluation is important in order to measure the project performance and impact.  In addition, evaluation is also needed to develop better plans and strategies and create a sustainable program.
          <br></br>
<br></br>
<br></br>
<Container>Feasibility Studies</Container>
<br></br>
<br></br>
<Container>Project Institution Measurement</Container>
<br></br>
<br></br>
<Container>Project Impact Assessment</Container>
<br></br>
<br></br>
<Container>Regulatory Documents</Container>
<br></br>
<br></br>
<Container>Environmental Quality Assessment</Container>
<br></br>
<br></br>
<Container>Project Institution Measurement</Container>
<br></br>
<br></br>



</h3>
<br></br>

</div>
        
       
        </div>
      </div>
  );
}
