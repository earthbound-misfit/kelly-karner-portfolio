import React from 'react';
import { Paper, createStyles } from '@mantine/core';

const useStyles = createStyles({
  paperStyling: {
    backgroundColor: 'black',

    borderRadius: '13px',
    fontFamily: 'Poppins',
    textAlign: 'center',
    width: '100%',
    fontWeight: 600, 
    fontSize: '2rem',
    color: 'white',
    padding: '0 0 40px 0',

    '&:hover': {
      // backgroundColor: 'white',
      // color: 'black',
      // transition: '0.3s',
      // border: '1.5px solid black',
    }
  }
})

export const ProjectsHeader = () => {
  const { classes } = useStyles()

  return (
 
        <>
     
          <Paper className={classes.paperStyling}>
            Projects
          </Paper>
        </>
        

  


  )
}





