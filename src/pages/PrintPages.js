import React, { useContext } from 'react';
import SiteContext from '../model/SiteContext';
import styled from 'styled-components';
import allPages from '../model/allPages';
import { Grid, Typography } from '@material-ui/core';
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
  const [state] = useContext(SiteContext);
  const pages = allPages(state);

  React.useEffect(() => {
    // TODO, this is a kludge, find an event that
    // allows us to detect when all the images are
    // ready to print. Without this we only get the
    // First one or two images.
    setTimeout(window.print, 5000);
  }, []);

  return (
    <>
      <Overlay id="printOverlay">
        <Grid container alignContent="center" alignItems="center">
          <Grid item>
            <Typography>
              Please wait while we prepare your printout...
            </Typography>
          </Grid>
        </Grid>
      </Overlay>
      {pages}
    </>
  );
}

export default PrintPages;
