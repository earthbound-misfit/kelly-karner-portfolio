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
    minHeight: 400,
    boxSizing: 'border-box',
    justifyContent: 'center',
    // backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //   theme.colors[theme.primaryColor][7]
    // } 100%)`,
    borderRadius: theme.radius.lg,
    padding: `calc(${theme.spacing.xl} * 2.5) 0`,

    [theme.fn.smallerThan('sm')]: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: rem(300),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: '13px',
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: '#20b2aa',
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,
    borderRadius: theme.radius.lg,
    padding: '5px 10px',

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
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
   
    '&:hover': {
      opacity: '80%',
      backgroundColor: '#20b2aa',
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
        <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact me</Title>
        

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

