import React, { Component } from 'react';
import {Grid, Nav, Navbar, NavItem, Glyphicon} from 'react-bootstrap';


export class SiteNavbar extends Component {
  render() {
    return (<Grid fluid>
   <Navbar collapseOnSelect fluid fixedTop className="site-navbar"> 
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#" id="site-brand">NB</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>

      <Nav pullRight>
        <NavItem eventKey={"bio"} href="bio" onSelect={this.props.scrollTo}><Glyphicon glyph="user"/>&nbsp;Bio</NavItem>
        <NavItem eventKey={"projects"} href="projects"onSelect={this.props.scrollTo}><Glyphicon glyph="folder-open"/>&nbsp; Portfolio</NavItem>
        <NavItem eventKey={"contact"} to="contact" onSelect={this.props.scrollTo}><Glyphicon glyph="envelope"/>&nbsp;Contact</NavItem>        
      </Nav>
    </Navbar.Collapse>
   </Navbar> 
    </Grid>);
  }
}

