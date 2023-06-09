import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, createStyles } from '@mantine/core';

const useStyles = createStyles({
  buttonStyling: {
    borderRadius: '13px', 
    backgroundColor: 'white',
    fontFamily: 'Poppins',
    textAlign: 'center',
    height: '100%',
    fontWeight: 600, 
    color: 'black',
    padding: '20px 27px',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
      transition: '0.3s',
    },
    '&:visited': {
      color: 'black',
    }
  }
})

export const Contact = () => {
  const { classes } = useStyles()

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
      <div style={{alignSelf: 'center', fontSize: '1.2rem'}}>
        <a style={{textDecoration: 'none'}} href="src/assets/pdf/KellyKarner_SoftwareDeveloper_Resume.pdf">
          <Paper className={classes.buttonStyling}>
            View Resume
          </Paper>
        </a>
        
      </div>
      <div style={{alignSelf: 'center', fontSize: '1.2rem'}}>
  
          <Paper className={classes.buttonStyling}>
            <Link style={{textDecoration: 'none'}} to="/getintouch">Get in Touch</Link>
          </Paper>

      </div>

    </div>
  )
}



