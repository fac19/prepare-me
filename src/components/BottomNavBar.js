import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Typography } from '@material-ui/core';
// Icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styled from 'styled-components';

// const yellowColor = '#fbb03b';
const tealColor = '#0EB5BB';

const useStyles = makeStyles({
  root: {
    'width': '100%',
    'color': tealColor,
    '&$selected': {
      color: 'black',
    },
    '&$disabled': {
      color: '#000',
    },
  },
  selected: {},
  disabled: {},
});

const MyText = styled(Typography)`
  align-self: center;
`;

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
      />
    );
  };

  const PageNumberDisplay = () => {
    return (
      <MyText variant="h3" align="center">
        {pageNumber}/{totalPages}
      </MyText>
    );
  };

  const PageFinishDisplay = () => {
    return (
      <MyText variant="h3" align="center" justify="center">
        Done!
      </MyText>
    );
  };

  let Back = NormalBackButton;
  if (pageNumber === 1) Back = DisabledBackButton; // unless we're on 1st page
  if (!pageNumber) Back = ActionsPageBackButton; // unless we're on actions page

  let PageDisp = PageNumberDisplay;
  if (!pageNumber) PageDisp = PageFinishDisplay; // unless we're on actions page

  let Next = NormalNextButton;
  if (!pageNumber) Next = DisabledNextButton; // unless we're on actions page

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      {Back && <Back />}
      {PageDisp && <PageDisp />}
      {Next && <Next />}
    </BottomNavigation>

    // <BottomNavigation
    //   value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
    //   showLabels
    // >
    //   {!pageNumber ? (
    //     <>
    //       <ActionsPageBackButton />
    //       <PageFinishDisplay />
    //       <DisabledNextButton />
    //     </>
    //   ) : pageNumber === 1 ? (
    //     <>
    //       <DisabledBackButton />
    //       <PageNumberDisplay />
    //       <NormalNextButton />
    //     </>
    //   ) : (
    //     <>
    //       <NormalBackButton />
    //       <PageNumberDisplay />
    //       <NormalNextButton />
    //     </>
    //   )}
    // </BottomNavigation>
  );
}

export default BottomNavBar;
