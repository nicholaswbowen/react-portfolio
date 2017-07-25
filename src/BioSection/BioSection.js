import React, { Component } from 'react';
import { Row, Col, Panel, Image} from 'react-bootstrap';
import linkedinLogo from '../assets/linkedin-logo.png';

export class BioSection extends Component {
  render() {
    return (
    <Row className="content-section" id="bio">
        <Col xs={12} xsOffset={0} >
        <br className="add-margin-bottom" />
        <br className="add-margin-bottom" />
        <div>
          
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} className="text-center add-margin-bottom">
            <h1>Seattle Front End Developer</h1>
            <h3 className="add-margin-bottom">Tried and True. Devoted to the art of crafting, polishing, and maintaining innovative products</h3>
            <span className="linkedin-header">
              <a href="https://www.linkedin.com/in/nicholas-bowen-545167133/" target="blank">
                <h3 style={{display: "inline"}}>Connect with me on &nbsp;<Image src={linkedinLogo} responsive width="200px" style={{display: "inline"}}/></h3>
              </a>
            </span>
          </Col>
          </div>
          <div className="add-margin-bottom"> 
            <Col xs={12} smOffset={1} sm={10} lg={8} lgOffset={2} xsOffset={0} className="add-margin-bottom">
              <Col xs={6} sm={4}> <Panel className="text-center">React</Panel> </Col>
              <Col xs={6} sm={4}> <Panel className="text-center">AngularJS</Panel> </Col>
              <Col xs={6} sm={4}> <Panel className="text-center">Node</Panel> </Col>
              <Col xs={6} sm={4}> <Panel className="text-center">Sass</Panel> </Col> 
              <Col xs={6} sm={4}> <Panel className="text-center">HTML5</Panel> </Col>  
              <Col xs={6} sm={4}> <Panel className="text-center">Canvas</Panel> </Col>
              <Col xs={6} sm={4}> <Panel className="text-center">TypeScript</Panel> </Col>
              <Col xs={6} sm={4}> <Panel className="text-center">Agile</Panel> </Col>
              <Col xs={6} xsOffset={3} sm={4} smOffset={0}> <Panel className="text-center">Git</Panel> </Col>      
                           
            </Col>
          </div>

        </Col>
    </Row>
    );
  }
}
