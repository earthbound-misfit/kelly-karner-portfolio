import React from 'react';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  UnstyledButton,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconBrandLinkedin, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react';
import '../main.css'
import { ScrollToTop } from '../ScrollToTop';


const useStyles = createStyles((theme) => ({
  wrapper: {
    border: '4px solid white',
    marginTop: '1rem',
    marginBottom: '1rem',
    borderRadius: theme.radius.lg,
    padding: '2rem',
    alignSelf: 'center',
    width: '100%',
   
 
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.black,
    minWidth: '2.5rem',
    padding: theme.spacing.sm,
    borderRadius: '13px',
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: '#20b2aa',
    },
  },

  input: {
    backgroundColor: theme.white,
    color: theme.black,
    fontFamily: 'Poppins',
    borderRadius: theme.radius.md,
    padding: '5px 10px',

    '&::placeholder': {
      color: theme.white,
    },
  },

  inputLabel: {
    color: theme.white,
  },

  send: {
    backgroundColor: 'white',
    borderRadius: theme.radius.md,
    color: 'black',
    width: '100%',
    textAlign: 'center',
    minHeight: '50px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    // border: '2px solid white',
    marginTop: '1.5rem',
   
    '&:hover': {
      backgroundColor: 'black',
      color: theme.white,
      transition: '0.3s',
    }

  },
}));

const social = [IconBrandLinkedin, IconBrandGithub, IconBrandInstagram];

export const GetInTouch = () => {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={50} className={classes.social} variant="transparent">
      <Icon size="2.5rem" stroke={2} />
    </ActionIcon>
  ));
  return (
    <>

      <SimpleGrid className={classes.wrapper} cols={2} spacing={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
          <Title className={classes.title}>Get in Touch</Title>

          <Group className="contact-and-icons" mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Name"
            placeholder="Betty Boop"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Your message"
            placeholder="Please type your message here"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position="right" mt="md">
            <UnstyledButton
              className={classes.send}
              >Send message</UnstyledButton>
          </Group>
        </div>
      </SimpleGrid>
      <div style={{color: 'white', textAlign: 'center', margin: '2rem'}}>
        <ScrollToTop />
      <small>© 2023 | Created by Kelly Karner</small>
      
      </div>
    </>

  )
}

