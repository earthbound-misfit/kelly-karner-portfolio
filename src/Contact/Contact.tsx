import React from 'react';
import { UnstyledButton, createStyles } from '@mantine/core';

const useStyles = createStyles({
  buttonStyling: {
    borderRadius: '25px', 
    backgroundColor: 'black',
    fontFamily: 'Poppins',
    fontWeight: 600, 
    color: 'white',
    padding: '10px 30px',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      transition: '0.3s',
      border: '1.5px solid black',
    }
  }
})

export const Contact = () => {
  const { classes } = useStyles()

  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
      <div style={{alignSelf: 'center', fontSize: '1.4rem'}}>
        <a href="src/assets/pdf/KellyKarner_SoftwareDeveloper_Resume.pdf">
          <UnstyledButton className={classes.buttonStyling}>
            Resume
          </UnstyledButton>
        </a>
        
      </div>
      <div style={{alignSelf: 'center', fontSize: '1.4rem'}}>
        <UnstyledButton className={classes.buttonStyling}>
          Get in Touch
        </UnstyledButton>
      </div>

    </div>
  )
}



