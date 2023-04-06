
import { Grid, Col, Group, createStyles, Paper, UnstyledButton, Text } from '@mantine/core';
import '../main.css';
import { skills } from '../Portfolio';



const useStyles = createStyles((theme) =>({
  button: {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: 600,
    borderRadius: '15px',
    minHeight: '50px',
    minWidth: '8rem',
    '&:hover': {
      backgroundColor: '#20b2aa',
      transition: '0.4s',
      color: 'white',
    }
  },
  skill: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: '1.5rem',
    textAlign: 'center',
  }
}));

export const Skills = () => {
  const { classes } = useStyles();


  const skillsButtons = skills.map((skill) => (
  
      <UnstyledButton
        className={classes.button}
      >
        {skill}
      </UnstyledButton>

  ));

  return (

    <Grid grow style={{padding: '3rem', width: '100%', textAlign: 'center'}}>
      <Grid.Col>
      {skillsButtons}
      </Grid.Col>
    </Grid>
 
  );
};
