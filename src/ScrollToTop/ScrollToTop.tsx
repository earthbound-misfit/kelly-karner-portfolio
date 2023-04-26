import React from 'react'
import { useWindowScroll } from '@mantine/hooks'
import { Button, Text, Group } from '@mantine/core'

export const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
    <Group position="center">
      <Button style={{backgroundColor: 'white', color: 'black', fontFamily: 'Poppins', marginBottom: '20px', borderRadius: '13px', height: '3rem'}} onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
    </>
  )
}

