import React, { Component } from 'react';
import MailTo from 'react-mailto';
import {Row, Col, Image, Glyphicon} from 'react-bootstrap';
import headshot from "../assets/Headshot.jpg"

export class ContactSection extends Component {
  render() {
    return ( 
    <Row className="add-margin-bottom content-section" id="contact">
      <div className="add-margin-bottom"></div>
        <Col xs={12} xsOffset={0}>

            <Col xs={10} sm={3} xsOffset={1} >
               <Image src={headshot} circle responsive /> 
            </Col>
            <Col xs={10} xsOffset={1} sm={6} >
              <h1 className="text-center">Contact me</h1> 
              <Col sm={8} smOffset={2}>

                <h3><MailTo email="nicholas.w.bowen@gmail.com" obfuscate={true}><Glyphicon glyph="send"/> Email Me</MailTo></h3>
                <h3><a href="https://github.com/nicholaswbowen" target="blank"><Glyphicon glyph="tasks"/> GitHub</a></h3>
                <h3><a href="https://www.linkedin.com/in/nicholas-bowen-545167133/" target="blank"><Glyphicon glyph="briefcase"/> Linkedin</a></h3>
                <br />
                <br />
                <em><h4>Available for open source work, freelance jobs and exciting team oppurtunities.</h4></em>
              </Col>

            </Col>
            <Col xs={12} className="add-margin-bottom"></Col>
        </Col>
        
    </Row> 
    );
  }
}
