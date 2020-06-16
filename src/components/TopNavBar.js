import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Menu,
  MenuItem,
  BottomNavigation as TopNavigation,
  BottomNavigationAction as TopNavigationAction,
} from '@material-ui/core';
import RenderStory from './RenderStory';

import WarningPage from './WarningPage';
import SiteContext from '../model/SiteContext';

// Icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const ITEM_HEIGHT = 48;
const useStyles = makeStyles({
  root: {
    'width': '70%',
    'color': 'black',
    '&$selected': {
      color: 'black',
    },
  },
  selected: {},
});

const TopNavbar = ({ pageNumber }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alert, setAlert] = React.useState(false);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const [, dispatch] = React.useContext(SiteContext);

  // const handleClick = (event) => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdd = () => {
    history.push({
      pathname: '/select-page-template',
      params: { pageNumber },
    });
  };

  const handleDelete = () => {
    console.log('delete handler');
    dispatch({
      type: 'delete page',
      pageNumber,
    });
  };

  return (
    <>
      <TopNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <TopNavigationAction
          selected
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          label="Home"
          icon={<HomeOutlinedIcon />}
          onClick={() => setAlert(true)}
        />
        <TopNavigationAction
          selected
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          label="Delete Page"
          icon={<DeleteOutlineOutlinedIcon />}
          onClick={handleDelete}
          component={Link}
          to={`/story-page/${pageNumber - 1 || 1}`}
        />
        <TopNavigationAction
          selected
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          label="Add Page"
          icon={<AddOutlinedIcon />}
          onClick={handleAdd}
        />

        <TopNavigationAction
          selected
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          label="More"
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
          icon={<MoreVertOutlinedIcon />}
        />
      </TopNavigation>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '25ch',
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
        >
          <GetAppOutlinedIcon />
          <RenderStory />
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

      {alert ? <WarningPage alert={alert} setAlert={setAlert} /> : null}
    </>
  );
};

export default TopNavbar;
