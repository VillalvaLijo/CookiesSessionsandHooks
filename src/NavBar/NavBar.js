import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuButton from '../MenuButton/MenuButton'

import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        // display: flex,
        display: "flex",
        flexGrow: 1,
        color: "red",
        "justify-content": "center",
      
        // justify-content: center,
        // justifyContent: center,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "flex",
        flexGrow: 1,
        "justify-content": "center",

        // justifyContent: Center,
    },
}));


export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuButton />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            First Clicker
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          {/* <Typography variant="h6" className={classes.title}>
            Secound Clicker
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Third Clicker
          </Typography> */}
          <Typography variant="h3" className={classes.title}>
            Cookie Clicker
            </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}
