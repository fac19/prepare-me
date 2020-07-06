import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SiteContext from '../model/SiteContext';
import styled from 'styled-components';
import allPages from '../model/allPages';
import { Grid, Typography } from '@material-ui/core';
import CircularIndeterminate from '../components/CircularIndeterminate';
import html2canvas from '@nidi/html2canvas';
import jsPDF from 'jspdf';

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

function PrintPDF() {
  const [state] = useContext(SiteContext);
  const history = useHistory();
  const pages = allPages(state);
  // const [images, setImages] = useState(null);
  React.useEffect(() => {
    setTimeout(async () => {
      const pageElements = document.querySelectorAll('.pageframe');
      const doc = new jsPDF();
      for (const [index, pageElem] of pageElements.entries()) {
        const canvasObject = await html2canvas(pageElem, {
          letterRendering: 1,
          useCORS: true,
          allowTaint: true,
        });
        doc.addImage(canvasObject, 'JPEG', 0, 0);
        if (index < pageElements.length - 1) doc.addPage();
      }
      doc.save('prepareme storybuilder.pdf');
      history.goBack();
    }, 3000);
  }, [history]);

  return (
    <>
      <Overlay id="printOverlay">
        <OurGrid container>
          <Grid item>
            <CircularIndeterminate />
          </Grid>
          <Grid item>
            <Typography variant="h3">
              Please wait while we prepare your download...
            </Typography>
          </Grid>
        </OurGrid>
      </Overlay>
      {pages}
    </>
  );
}

export default PrintPDF;
