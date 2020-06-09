import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Typography } from '@material-ui/core';
// Icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import initialState from '../model/initialState';

// const yellowColor = '#fbb03b';
const tealColor = '#0EB5BB';

const useStyles = makeStyles({
  root: {
    'width': '100%',
    '&$selected': {
      color: tealColor,
    },
    '&$disabled': {
      color: '#000',
    },
  },
  selected: {},
  disabled: {},
});

function BottomNavBar({ pageNumber }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      {pageNumber !== 1 ? (
        <BottomNavigationAction
          selected
          classes={{
            root: classes.root,
            selected: classes.selected,
          }}
          label="Back"
          icon={<NavigateBeforeIcon />}
          onClick={() => history.push(`/story-page/${pageNumber - 1}`)}
        />
      ) : (
        <BottomNavigationAction
          disabled
          classes={{
            root: classes.root,
            disabled: classes.disabled,
          }}
          label="Back"
          icon={<NavigateBeforeIcon />}
          onClick={() => history.push(`/story-page/${pageNumber - 1}`)}
        />
      )}
      <Typography variant="h3" align="center">
        {pageNumber}/{initialState.pages.length}
      </Typography>

      <BottomNavigationAction
        selected
        classes={{
          root: classes.root,
          selected: classes.selected,
          focused: classes.focused,
        }}
        label="Next"
        icon={<NavigateNextIcon />}
        onClick={() => history.push(`/story-page/${pageNumber + 1}`)}
      />
    </BottomNavigation>
  );
}

export default BottomNavBar;
