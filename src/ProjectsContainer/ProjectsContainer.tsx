import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { projects } from '../Portfolio';
import '../main.css'



const useStyles = createStyles((theme) => ({
  wrapper: {
    borderRadius: theme.radius.lg,
  },
  card: {
    transition: 'transform 150ms ease, 150ms ease',
    minHeight: '420px',
    backgroundColor: 'white',
    color: 'black',
    display: 'grid',
    borderRadius: theme.radius.lg,

    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      borderRadius: theme.radius.md,
    },
    
  },

  title: {
    fontFamily: "Caveat",
    fontWeight: 600,
    fontSize: '4rem',
    textAlign: 'center',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center'

  },
  
}));


export const ProjectsContainer = () => {
  // const {title, image, description, stack, sourceCode, livePreview} = projects;
  const {classes} = useStyles();

  const projectCards = projects.map((project) => (
    <div className={classes.wrapper}>
    <Card id="project-card" key={project.title} radius="lg" component="a" href={project.livePreview} className={classes.card}>
      <Text className={classes.title} mt={5}>
        {project.title}
        </Text>
      {/* <AspectRatio ratio={1920 / 1080}> */}
        
        {/* <Image radius="lg" src={project.image} /> */}
      {/* </AspectRatio> */}
    </Card>
     
    </div>
   
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




