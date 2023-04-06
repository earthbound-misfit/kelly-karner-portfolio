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


const useStyles = createStyles((theme) => ({
  wrapper: {
    border: '2px solid white',
    boxSizing: 'border-box',
    marginTop: '1rem',
    borderRadius: theme.radius.lg,
    padding: '3rem',
 
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '4rem'
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
   
    padding: theme.spacing.xl,
    borderRadius: '13px',
    boxShadow: theme.shadows.lg,
    margin: '1rem',
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
    backgroundColor: 'black',
    borderRadius: '25px',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    minHeight: '50px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    border: '1px solid white',
   
    '&:hover': {
      backgroundColor: '#fff',
      color: theme.black,
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
        <div className={classes.wrapper} style={{marginTop: '1rem'}}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Get in Touch</Title>
        

          {/* <ContactIconsList variant="white" /> */}

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
    </div>
  )
}

