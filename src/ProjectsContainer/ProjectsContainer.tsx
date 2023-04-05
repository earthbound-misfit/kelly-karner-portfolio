import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { projects } from '../Portfolio';
import '../main.css'



const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, 150ms ease',
    margin: ' 10px 0 0 0',

    '&:hover': {
      transform: 'scale(1.02)',
    },
    
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    fontWeight: 600,
    fontSize: '1.5rem',
    textAlign: 'center',
    borderRadius: '25px'
  },
  
}));


export const ProjectsContainer = () => {
  // const {title, image, description, stack, sourceCode, livePreview} = projects;
  const {classes} = useStyles();

  const projectCards = projects.map((project) => (
    <Card id="project-card" key={project.title} radius="lg" component="a" href="#" className={classes.card}>
      {/* <Text className={classes.title} mt={5}>
        {project.title}
        </Text> */}
      {/* <AspectRatio ratio={1920 / 1080}> */}
        
        <Image radius="lg" src={project.image} />
      {/* </AspectRatio> */}
    </Card>
  ))
  return (
    <>
      <div style={{marginTop: '10px'}}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {projectCards}
      </SimpleGrid>
      </div>
    </>
  )
}




