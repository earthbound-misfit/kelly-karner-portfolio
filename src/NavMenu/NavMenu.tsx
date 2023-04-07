import { useState } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    width: '100%',
    borderRadius: '13px 13px 0 0',
    backgroundColor: 'white',
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },


  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    justifyContent: 'space-between',
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    fontSize: '1rem',
    height: rem(38),
    backgroundColor: 'transparent',
    minWidth: '20%',
    border: 'none',
    borderRadius: '13px 13px 0 0',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'black',
      color: 'white',
    },

    '&[data-active]': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
}));

interface NavMenuProps {

  tabs: string[];
}

export function NavMenu({ tabs }: NavMenuProps) {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
     

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

        </Group>
      </Container>
      <Container>
        <Tabs
          color="black"
          unstyled 
          defaultValue="Home"
          classNames={{
            root: classes.tabs,
            tabsList: classes.tabsList,
            tab: classes.tab,
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}