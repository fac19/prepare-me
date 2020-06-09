import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Menu,
  MenuItem,
  IconButton,
  // ButtonGroup,
  // Button,
  // BottomNavigation,
  // BottomNavigationAction,
} from '@material-ui/core';

// Icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';

// import styled from 'styled-components';

// const MenuButton = styled(Button)`
//   display: flex;
//   flex-direction: column;
//   align-items: column;
// `;

const ITEM_HEIGHT = 48;

const TopNavbar = () => {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" aria-label="home" component={Link} to="/">
        <HomeOutlinedIcon />
        <Typography variant="h3" align="center">
          Home
        </Typography>
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="delete"
        component={Link}
        to="/delete-page"
      >
        <DeleteOutlineOutlinedIcon />
        <Typography variant="h3" align="center">
          Delete
        </Typography>
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="add"
        component={Link}
        to="/add-page"
      >
        <AddOutlinedIcon />
        <Typography variant="h3" align="center">
          Add
        </Typography>
      </IconButton>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertOutlinedIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem
          key="ReadMode"
          selected={'Read Mode' === 'Pyxis'}
          onClick={handleClose}
          component={Link}
          to="/view-mode"
        >
          <MenuBookIcon />
          <Typography variant="h3" align="center">
            Read Mode
          </Typography>
        </MenuItem>
        <MenuItem
          key="Download"
          selected={'Download' === 'Pyxis'}
          onClick={handleClose}
          component={Link}
          to="/download"
        >
          <GetAppOutlinedIcon />
          <Typography variant="h3" align="center">
            Download
          </Typography>
        </MenuItem>
        <MenuItem
          key="Print"
          selected={'Print' === 'Pyxis'}
          onClick={handleClose}
          component={Link}
          to="/print"
        >
          <PrintOutlinedIcon />
          <Typography variant="h3" align="center">
            Print
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TopNavbar;
