//Modules
import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './styles/styles.scss'
import scrollToElement from 'scroll-to-element';
//Components
import {SiteNavbar} from './SiteNavbar/SiteNavbar';
import {BioSection} from './BioSection/BioSection';
import {ProjectsSection} from './ProjectsSection/ProjectsSection';
import {ContactSection} from './ContactSection/ContactSection';
import {MainFooter} from './MainFooter/MainFooter';

class App extends Component {
  constructor(){
    super()
    console.log(scrollToElement)
  }
  scrollTo(e){
    console.log(e)
    scrollToElement(document.getElementById(e),{
    offset: -62,
    ease: 'outQuint',
    duration: 750
    })
  }
  render() {
    return (<div>
      <SiteNavbar scrollTo={this.scrollTo.bind(this)}/>
      <Grid fluid className="main-container">
      {/* Main Container */}
        <BioSection />
        <ProjectsSection/>
        <ContactSection/>
        <MainFooter/>
      </Grid>
      
    </div>);
  }
}

export default App;
