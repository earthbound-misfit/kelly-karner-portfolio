import React from 'react';
import { Grid, Col } from '@mantine/core';
import { about } from './Portfolio';
import { About } from './About';
import { Skills } from './Skills';
import {Contact} from './Contact';
import { ProjectsContainer } from './ProjectsContainer';
import { GetInTouch } from './GetInTouch';
import {Footer} from './Footer';
import './main.css'


const App = () => {

  return (
    <>
      <Grid style={{height: '100vh', margin: '10px'}}>
       
        <Col xs={12} style={{height: '15rem', backgroundColor: 'white', borderRadius: '10px', marginBottom: '20px'}}>
          <About />
        </Col>
        <Col xs={12} style={{height: '4rem', backgroundColor: 'white', borderRadius: '10px'}}>
          <Contact />
        </Col>
       
        <span id="projects-container" style={{justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
          <ProjectsContainer />
        </span>
         <Col xs={12} style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '20px', overflow: 'hidden'}}>
          <Skills />
        </Col>

        <Col xs={12} style={{backgroundColor: 'black', borderRadius: '10px'}}>
          <GetInTouch />
        </Col>
      </Grid>
    </>
  )
}

export default App