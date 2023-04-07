
import { Grid, Col, Group, Container, createStyles, Paper, UnstyledButton, Text } from '@mantine/core';
import '../main.css';
import { skills } from '../Portfolio';



const useStyles = createStyles((theme) =>({
  wrapper: {
    alignContent: 'center',
    border: '4px solid white',
    boxSizing: 'border-box',
    margin: '0 auto',
    borderRadius: theme.radius.lg,
    backgroundColor: 'black',
    // display: 'flex',
    // flexFlow: 'row',
    // flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    // border: '1px solid white',
    textAlign: 'center',
    margin: '.3rem',
    fontFamily: 'Poppins',
    fontSize: '1.2rem',
    fontWeight: 600,
    borderRadius: theme.radius.lg,
    minWidth: '8rem',
    minHeight: '55px',
    padding: '0.5rem',
    '&:hover': {
      // backgroundColor: '#20b2aa',
      transition: '0.4s',
      // color: 'white',
      backgroundColor: 'black',
      color: 'white',
    }
  },
  skill: {
    fontFamily: "Poppins",
    fontWeight: 600,
    textAlign: 'center',
    // flex: '1 225px',
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
    <Grid grow justify="space-between" style={{padding: '3rem', textAlign: 'center'}}>
      <Grid.Col>
      {skillsButtons}
      </Grid.Col>
    </Grid>
    </Group>
  );
};
