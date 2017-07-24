import React, { Component } from 'react';
import { Row, Col, Panel} from 'react-bootstrap';

export class BioSection extends Component {
  render() {
    return (
    <Row className="content-section" id="bio">
        <Col xs={12} xsOffset={0} >
        <br className="add-margin-bottom" />
        <br className="add-margin-bottom" />
        <div>
          
          <Col xs={10} xsOffset={1} sm={10} smOffset={1} className="text-center add-margin-bottom">
            <h1>A Seattle Front End Developer. Tried and True. Devoted to the art of crafting, polishing, and maintaining innovative products. </h1>
          </Col>
          </div>
          <div className="add-margin-bottom"> 
            <Col xs={12} smOffset={1} sm={10} lg={8} lgOffset={2} xsOffset={0}>
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
        <Col md={3} mdOffset={9} xs={10} xsOffset={1} className="text-center add-margin-bottom">
          <span><em>- Connect with me on <a href="https://www.linkedin.com/in/nicholas-bowen-545167133/" target="blank">Linkedin</a></em></span> 
          <br />
        </Col>
    </Row>
    );
  }
}
