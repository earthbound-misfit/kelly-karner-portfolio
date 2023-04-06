
import { Grid, Col, Group, Container, createStyles, Paper, UnstyledButton, Text } from '@mantine/core';
import '../main.css';
import { skills } from '../Portfolio';



const useStyles = createStyles((theme) =>({
  wrapper: {
    alignContent: 'center',
    border: '2px solid white',
    boxSizing: 'border-box',
    marginTop: '1rem',
    borderRadius: theme.radius.lg,
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    border: '1px solid white',
    textAlign: 'center',
    margin: '.5rem',
    fontFamily: 'Poppins',
    fontWeight: 600,
    borderRadius: '40px',
    minHeight: '45px',
    minWidth: '8rem',
    '&:hover': {
      // backgroundColor: '#20b2aa',
      transition: '0.4s',
      // color: 'white',
      backgroundColor: 'white',
      color: 'black',
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
    <Group className={classes.wrapper}>
    <Grid grow style={{padding: '3rem', textAlign: 'center'}}>
      <Grid.Col>
      {skillsButtons}
      </Grid.Col>
    </Grid>
    </Group>
  );
};
