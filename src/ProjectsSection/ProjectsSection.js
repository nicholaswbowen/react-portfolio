import React, { Component } from 'react';
import {Row, Col, Image, Panel, Glyphicon, Button} from 'react-bootstrap';
import HoodFacts from '../assets/Hoodfacts.jpg'
import ngII from '../assets/angular-interactive-image.jpg'
export class ProjectsSection extends Component {
  render() {
    return (
    <Row className="content-section" id="projects">
        <div className="add-margin-bottom">
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} className="text-center">
            <h1>
              Projects
            </h1> 
            <em>(The good stuff, let's be honest)</em>
            <Col xs={12}><div className="hrule"></div></Col>
            <br className="add-margin-bottom" />
            <br className="add-margin-bottom" />
          </Col>

        {/* HoodFacts */}
        <Col className="add-margin-bottom" >
          <Col xs={12} className="add-margin-bottom" >
            <Col md={5} className="text-center"> 
              <div className="add-margin-bottom">
                <h1>HoodFacts</h1>
                <h3>Hoodfacts is an open source data visualization for viewing stats that matter to you. </h3>
              </div>

              <br className="add-margin-bottom" />
                <Col xs={6} sm={4}> <Panel className="text-center">AngularJS</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">Typescript</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">Node</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">Google Maps</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">Canvas</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">MongoDB</Panel> </Col>
                <Col xs={12} className="code-links text-center add-margin-bottom">
                  <Col sm={5} xs={6}><a href="https://boiling-fortress-51118.herokuapp.com" target="blank"><Button bsStyle="success">Live</Button></a></Col>
                  <Col sm={2} xsHidden className="icon"><Glyphicon glyph="console"/></Col>
                  <Col sm={5} xs={6}><a href="https://github.com/nicholaswbowen/Hoodfacts" target="blank"><Button bsStyle="warning">Code</Button></a></Col>
                </Col>
            </Col>
            <Col md={7} xsHidden> 
              <div className="add-margin-bottom"></div>  
              <Image src={HoodFacts} responsive className="project-image"/>
            </Col>
          </Col>

        </Col>

        <Col xs={12}>
          <br className="add-margin-bottom" />
          <br className="add-margin-bottom" />
        </Col>

        {/* Angular-interactive-image */}
        <Col className="add-margin-bottom">
        <Col xs={12} className="add-margin-bottom">
          <Col md={5} className="text-center">                    
              <div className="add-margin-bottom">
                <h1>angular interactive image</h1>
                <h3>Create interactive, tooltiped images to show off your product with little effort.</h3>
                
              </div>
                <br className="add-margin-bottom" />
                <Col xs={6} sm={4}> <Panel className="text-center">AngularJS</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">Javascript</Panel> </Col>
                <Col xs={6} sm={4}> <Panel className="text-center">SVG</Panel> </Col>
                <Col xs={6} sm={4} smOffset={4}> <Panel className="text-center">Bootstrap</Panel> </Col>
                <Col xs={12} className="code-links text-center add-margin-bottom">
                  <Col sm={5} xs={6}><a href="https://trakerr.io/" target="blank"><Button bsStyle="success">Live</Button></a></Col>
                  <Col sm={2} xsHidden className="icon"><Glyphicon glyph="console" /></Col>
                  <Col sm={5} xs={6}><a href="https://github.com/trakerr-com/angular-interactive-image" target="blank"><Button bsStyle="warning">Code</Button></a></Col>
                </Col>
          </Col>
          <Col md={7} xsHidden>
              <div className="add-margin-bottom"></div>  
              <Image src={ngII} responsive rounded className="project-image"/>
          </Col>
        </Col>
        </Col>
        </div>
    </Row>
    );
  }
}
