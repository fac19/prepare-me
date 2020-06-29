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

  React.useEffect(() => {
    /* TODO. The setTimeout below is a kludge. When this useEffect runs only the html is guaranteed to be rendered, not the images. This seems to be causing a race condition that leads to an indeterminate number of images to appearing in the printout. We have some ideas how to do this properly but some research and testing are required and we were running short on time so we just stuck an arbitrary delay in. */

    /* We're not sure if the problem is that the images aren't loaded from cache yet, or that they are loaded but not painted yet. Trying to detect if the images have loaded by setting onload listeners for each pic might just cause another race condition as some images may already be loaded by the time we set them. A better idea might be to poll every 1/2 second with setInterval and check each image tag's .complete property. This might get stuck if a download fails though so we would also want to check the image's .naturalHeight property is not zero. This would guarantee the image has been downloaded or tell us that it has failed. That doesn't seem to guarantee the image has been painted yet though so to be thorough we might also need to await (one?) animation frame. */

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
