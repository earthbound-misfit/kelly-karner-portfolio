
import { Grid, Col, Group, Container, createStyles, Paper, UnstyledButton, Text } from '@mantine/core';
import '../main.css';
import { skills } from '../Portfolio';



const useStyles = createStyles((theme) =>({
  wrapper: {
    alignContent: 'center',
    border: '4px solid white',
    boxSizing: 'border-box',
    margin: '20px 0 10px 0',
    borderRadius: theme.radius.lg,
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    // border: '1px solid white',
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
      backgroundColor: 'black',
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
    <Group className={classes.wrapper}>
    <Grid grow style={{padding: '3rem', textAlign: 'center'}}>
      <Grid.Col span={6} >
      {skillsButtons}
      </Grid.Col>
    </Grid>
    </Group>
  );
};
