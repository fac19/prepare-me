import React, { useContext } from 'react';
import SiteContext from '../model/SiteContext';
import styled from 'styled-components';
import allPages from '../model/allPages';
import { Grid, Typography } from '@material-ui/core';
import CircularIndeterminate from '../components/CircularIndeterminate';
import { useHistory } from 'react-router-dom';

const OurGrid = styled(Grid)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  background: #ffffff;
  color: #000000;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

function PrintPages() {
  const history = useHistory();
  const [state] = useContext(SiteContext);
  const pages = allPages(state);

  // function handlePrintClose() {
  //   console.log('GOT PRINT WINDOW CLOSE EVENT!!!! BOOYAKKASHAHA!');
  // }

  React.useEffect(() => {
    // TODO, this is a kludge, find an event that
    // allows us to detect when all the images are
    // ready to print. Without this we only get the
    // First one or two images.

    setTimeout(window.print, 5000);
    window.addEventListener('afterprint', history.goBack);
  }, [history.goBack]);

  return (
    <>
      <Overlay id="printOverlay">
        <OurGrid container>
          <Grid item>
            <CircularIndeterminate />
          </Grid>
          <Grid item>
            <Typography variant="h3">
              Please wait while we prepare your printout...
            </Typography>
          </Grid>
        </OurGrid>
      </Overlay>
      {pages}
    </>
  );
}

export default PrintPages;
