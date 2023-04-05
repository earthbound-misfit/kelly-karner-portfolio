import React from 'react';
import { Grid, Col } from '@mantine/core';
import { about } from './Portfolio';
import { About } from './About';
import { Skills } from './Skills';
import {Contact} from './Contact';
import {ProjectsContainer} from './ProjectsContainer';

// import { Project1 } from './Project1';
// import { Project2 } from './Project2';

import './main.css'


const App = () => {
  
  // const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // const handleFocus = (index: number) => {
  //   if (containerRefs.current[index]) {
  //     containerRefs.current[index]?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //     setActiveIndex(index);
  //   }
  // };
  // const theme = useMantineTheme()

 

  return (
    <>
      <Grid style={{height: '100vh', margin: '10px'}}>
       
        <Col xs={12} style={{height: '15rem', backgroundColor: 'white', borderRadius: '10px', marginBottom: '10px'}}>
          <About />
     
        </Col>

        <Col xs={12} style={{height: '4rem', backgroundColor: 'white', borderRadius: '10px', marginBottom: '10px'}}>
          <Contact />
        </Col>
        <Col xs={12} style={{backgroundColor: 'white', borderRadius: '10px', marginBottom: '10px', overflow: 'hidden'}}>
          <Skills />
        </Col>
        <span id="projects-container" style={{justifyContent: 'center', width: '100%', flexWrap: 'wrap'}}>
     
          <ProjectsContainer />

       </span>

        <Col xs={12} style={{height: '3rem', backgroundColor: 'black', borderRadius: '10px'}}>
        </Col>
     

        

      </Grid>
  
    </>
  )
}

export default App