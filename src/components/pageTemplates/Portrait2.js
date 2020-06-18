import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';

import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: ${(props) => props.fontSize};
  display: inline-block;
  width: 50%;
  height: 100%;
  resize: none;
  border: 0;
`;

const OurPic = styled.img`
  max-width: 100%;
  max-height: 50%;
  object-fit: contain;
`;

const MyGrid = styled(Grid)`
  height: 50vh;
`;

function Portrait2({ pageNumber, fields, active = true }) {
  const theme = useTheme();
  console.log('FONTSIZE', theme.siteSettings.storyFontSize);
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <>
      <MyGrid
        container
        direction="row"
        alignContent="stretch"
        alignItems="center"
      >
        <Grid item xs={6}>
          <OurPic
            src={fields.pic1}
            id="pic1"
            onClick={(e) =>
              active && uploadImageHandler(e, pageNumber, dispatch)
            }
          ></OurPic>
        </Grid>

        <Grid item xs={6}>
          <OurText
            id="text1"
            value={fields.text1}
            onChange={(e) => editHandler(e, pageNumber, dispatch)}
            disabled={!active}
            fontSize={theme.siteSettings.storyFontSize}
          ></OurText>
        </Grid>

        <Grid item xs={6}>
          <OurPic
            src={fields.pic2}
            id="pic2"
            onClick={(e) =>
              active && uploadImageHandler(e, pageNumber, dispatch)
            }
          ></OurPic>
        </Grid>
        <Grid item xs={6}>
          <OurText
            id="text2"
            value={fields.text2}
            onChange={(e) => editHandler(e, pageNumber, dispatch)}
            disabled={!active}
            fontSize={theme.siteSettings.storyFontSize}
          ></OurText>
        </Grid>
      </MyGrid>
    </>
  );
}

Portrait2.fields = {
  pic1:
    'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg',
  text1: 'Click to edit text',
  pic2:
    'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg',
  text2: 'Click to edit text',
};

export default Portrait2;
