import React from 'react';
import { Button } from '@mantine/core';

export const Contact = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '100%'}}>
      <div style={{alignSelf: 'center', fontSize: '1.4rem'}}>
        <Button style={{borderRadius: '10px', width: '200px'}} color="dark" size="lg">Resume</Button>
        
      </div>
      <div style={{alignSelf: 'center', fontSize: '1.4rem'}}>
        <Button style={{borderRadius: '10px', width: '200px'}} color="dark" size="lg" border-radius="20px">Get in Touch</Button>
      </div>

    </div>
  )
}



