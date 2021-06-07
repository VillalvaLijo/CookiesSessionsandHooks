import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

import { useHistory } from "react-router-dom";


export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pathname) => {
    setAnchorEl(null);
    history.push(pathname);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>handleClose("/HomePage")}>Home</MenuItem>
        <MenuItem onClick={()=>handleClose("/firstClicker")}>First Clicker</MenuItem>
        <MenuItem onClick={() => handleClose("/secoundClicker")}>Secound Clicker</MenuItem>
        <MenuItem onClick={()=>handleClose("/thirdClicker")}>Third Clicker</MenuItem>
      </Menu>
    </div>
  );
}