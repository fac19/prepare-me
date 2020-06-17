import React from 'react';

import { Grid } from '@material-ui/core';

import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 50%;
  height: 100%;
  resize: none;
  border: 0;
`;

const OurPic = styled.img`
  width: 50%;
  height: 40%;
  object-fit: contain;
`;

function Portrait2({ pageNumber, fields, active = true }) {
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <Grid>
      <Grid item>
        <OurPic
          src={fields.pic1}
          id="pic1"
          onClick={(e) => active && uploadImageHandler(e, pageNumber, dispatch)}
        ></OurPic>
        <OurText
          id="text1"
          value={fields.text1}
          onChange={(e) => editHandler(e, pageNumber, dispatch)}
          disabled={!active}
        ></OurText>
      </Grid>
      <Grid item>
        <OurPic
          src={fields.pic2}
          id="pic2"
          onClick={(e) => active && uploadImageHandler(e, pageNumber, dispatch)}
        ></OurPic>
        <OurText
          id="text2"
          value={fields.text2}
          onChange={(e) => editHandler(e, pageNumber, dispatch)}
          disabled={!active}
        ></OurText>
      </Grid>
    </Grid>
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
