import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Typography } from '@material-ui/core';
// Icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// const yellowColor = '#fbb03b';
const tealColor = '#0EB5BB';

const useStyles = makeStyles({
  root: {
    'width': '100%',
    'color': tealColor,
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

function BottomNavBar({ pageNumber, totalPages }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  // const totalPages = initialState.pages.length;
  const isLastPage =
    pageNumber >= totalPages
      ? `/actions-page`
      : `/story-page/${pageNumber + 1}`;

  const NormalBackButton = () => {
    return (
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
    );
  };

  const DisabledBackButton = () => {
    return (
      <BottomNavigationAction
        disabled
        classes={{
          root: classes.root,
          disabled: classes.disabled,
        }}
        label="Back Disabled"
        icon={<NavigateBeforeIcon />}
        onClick={() => history.push(`/story-page/${pageNumber - 1}`)}
      />
    );
  };

  const ActionsPageBackButton = () => {
    return (
      <BottomNavigationAction
        selected
        classes={{
          root: classes.root,
          selected: classes.selected,
          focused: classes.focused,
        }}
        label="Back"
        icon={<NavigateBeforeIcon />}
        onClick={() => history.goBack()}
      />
    );
  };

  const NormalNextButton = () => {
    return (
      <BottomNavigationAction
        selected
        classes={{
          root: classes.root,
          selected: classes.selected,
          focused: classes.focused,
        }}
        label="Next"
        icon={<NavigateNextIcon />}
        onClick={() => history.push(isLastPage)}
      />
    );
  };

  const DisabledNextButton = () => {
    return (
      <BottomNavigationAction
        disabled
        classes={{
          root: classes.root,
          disabled: classes.disabled,
          focused: classes.focused,
        }}
        label="Next Disabled"
        icon={<NavigateNextIcon />}
        onClick={() => history.push(isLastPage)}
      />
    );
  };

  const PageNumberDisplay = () => {
    return (
      <Typography variant="h3" align="center">
        {pageNumber}/{totalPages}
      </Typography>
    );
  };

  const PageFinishDisplay = () => {
    return (
      <Typography variant="h3" align="center">
        Finished
      </Typography>
    );
  };

  let Back = NormalBackButton;
  if (pageNumber === 1) Back = DisabledBackButton; // unless we're on 1st page
  if (!pageNumber) Back = ActionsPageBackButton; // unless we're on actions page

  let PageDisp = PageNumberDisplay;
  if (!pageNumber) PageDisp = undefined; // unless we're on actions page

  let Next = NormalNextButton;
  if (!pageNumber) Next = undefined; // unless we're on actions page

  return (
    // <BottomNavigation>
    //   {Back && <Back />}
    //   {PageDisp && <PageDisp />}
    //   {Next && <Next />}
    // </BottomNavigation>

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      {!pageNumber ? (
        <>
          <ActionsPageBackButton />
          <PageFinishDisplay />
          <DisabledNextButton />
        </>
      ) : pageNumber === 1 ? (
        <>
          <DisabledBackButton />
          <PageNumberDisplay />
          <NormalNextButton />
        </>
      ) : (
        <>
          <NormalBackButton />
          <PageNumberDisplay />
          <NormalNextButton />
        </>
      )}
    </BottomNavigation>
  );
}

export default BottomNavBar;
