import React from 'react';
import { Button } from '@mantine/core';

export const Contact = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
      <div style={{alignSelf: 'center', fontSize: '1.4rem'}}>
        <a href="src/assets/pdf/KellyKarner_SoftwareDeveloper_Resume.pdf"><Button className="contact" style={{borderRadius: '25px', backgroundColor: 'black'}} size="lg">Resume</Button></a>
        
      </div>
      <div style={{alignSelf: 'center', fontSize: '1.4rem'}}>
        <Button className="contact" style={{borderRadius: '25px', backgroundColor: 'black', padding: '0 15px 0 15px'}} size="lg" border-radius="20px">Get in Touch</Button>
      </div>

    </div>
  )
}



