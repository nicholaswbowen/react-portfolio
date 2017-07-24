import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';


export class MainFooter extends Component {
  render() {
    return (
      <Row className="content-section text-center">
        <div className="add-margin-bottom"></div>
        <Col xs={12} ><h4><em>This page was built using React, Sass, and Bootstrap</em></h4></Col>
        <Col xs={12} className="add-margin-bottom">
          <h2>Nicholas Bowen © 2017. All Rights Reserved.</h2>
        </Col>
      </Row>
    );
  }
}
