import { Grid, Paper, Flex, SimpleGrid, Group } from '@mantine/core';
import '../main.css'



export const Skills = () => {
  return (
    <>
    <Grid>
      <div id="languages-list" >
      
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>HTML</h4></Paper>
   
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>CSS</h4></Paper>
  
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>JavaScript</h4></Paper>
   
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>TypeScript</h4></Paper>
  
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>React</h4></Paper>

        <Paper className="language-list-item" radius="md" shadow="xl" p='md' withBorder><h4 style={{fontSize: '1.25rem'}}>Redux</h4></Paper>
      
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>Python</h4></Paper>
  
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>Flask</h4></Paper>
    
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>SQL</h4></Paper>
   
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>NOSQL</h4></Paper>
  
        <Paper className="language-list-item" radius="md" shadow="xl" p='lg' withBorder><h4 style={{fontSize: '1.25rem'}}>PostgreSQL</h4></Paper>
  
        <Paper className="language-list-item" radius="md" shadow="xl" p='md' withBorder><h4 style={{fontSize: '1.25rem'}}>AWS</h4></Paper>

        <Paper className="language-list-item" radius="md" shadow="xl" p='md' withBorder><h4 style={{fontSize: '1.25rem'}}>CI/CD</h4></Paper>
  
    
        <Paper className="language-list-item" radius="md" shadow="xl" p='md' withBorder><h4 style={{fontSize: '1.25rem'}}>Git/Github</h4></Paper>
    
    </div>

 

</Grid>
    </>
  )
}

