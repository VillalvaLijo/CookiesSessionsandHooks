import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuButton from '../MenuButton/MenuButton'

import { spacing } from '@material-ui/system';


//Material-ui App bar

//styled with makestyles

//icon opens menu button contained in MenuButton file

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        color: "black",
        "justify-content": "center",
    },
    menuButton: {
        margin: spacing(2),
    },
    title: {
        display: "flex",
        flexGrow: 1,
        "justify-content": "center",
    },
}));


export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#000000" aria-label="menu">
            <MenuButton />
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            Cookie Clicker
            </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
