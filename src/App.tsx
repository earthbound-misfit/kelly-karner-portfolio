import React from 'react';
import { Grid, Col } from '@mantine/core';
import { about } from './Portfolio';
import { NavMenu } from './NavMenu';
import { About } from './About';
import { Skills } from './Skills';
import {Contact} from './Contact';
import { ProjectsHeader } from './ProjectsHeader';
import { ProjectsContainer } from './ProjectsContainer';
import { GetInTouch } from './GetInTouch';
import { Footer } from './Footer';
import './main.css'


const App = () => {

  return (
    <>
      <Grid style={{height: '100vh', margin: '10px'}}>
        <NavMenu tabs={['Home','Resume', 'Get in Touch', 'Skills', 'Projects']}/>
       
        <Col xs={12} style={{height: '15rem', border: '4px solid white', borderTop: 0, borderRadius: '0 0 13px 13px'}}>
          <About />
        </Col>
        <Col xs={12} style={{height: '6rem', backgroundColor: 'black'}}>
          <Contact />
        </Col>
       
        <Skills />

 
        <span id="projects-container" style={{justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
          <ProjectsContainer />
        </span>
      
        <Col xs={12} style={{backgroundColor: 'black', borderRadius: '10px'}}>
          <GetInTouch />
        </Col>

        {/* <Footer /> */}
      </Grid>
    </>
  )
}

export default App