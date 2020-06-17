import React from 'react';

import { Grid } from '@material-ui/core';

import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 1vh;
  width: 90%;
  resize: none;
  border: 0;
`;

const OurPic = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;
`;

const OurCard = styled.div`
  width: 150%;
  border: 3px solid red;
  text-align: center;
`;

function Pecs12({ pageNumber, fields, active = true }) {
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <Grid container spacing={4}>
      <Grid container item justify="space-around" xs={12} spacing={3}>
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic1}
              id="pic1"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text1"
              value={fields.text1}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic2}
              id="pic2"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text2"
              value={fields.text2}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic3}
              id="pic3"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text3"
              value={fields.text3}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
      </Grid>{' '}
      <Grid container item justify="space-around" xs={12} spacing={3}>
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic4}
              id="pic4"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text4"
              value={fields.text4}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic5}
              id="pic5"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text5"
              value={fields.text5}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic6}
              id="pic6"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text6"
              value={fields.text6}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
      </Grid>{' '}
      <Grid container item justify="space-around" xs={12} spacing={3}>
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic7}
              id="pic7"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text7"
              value={fields.text7}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic8}
              id="pic8"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text8"
              value={fields.text8}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic9}
              id="pic9"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text9"
              value={fields.text9}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
      </Grid>{' '}
      <Grid container item justify="space-around" xs={12} spacing={3}>
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic10}
              id="pic10"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text10"
              value={fields.text10}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>{' '}
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic11}
              id="pic11"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text11"
              value={fields.text11}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>
        <Grid item xs={3}>
          <OurCard>
            <OurPic
              src={fields.pic12}
              id="pic12"
              onClick={(e) =>
                active && uploadImageHandler(e, pageNumber, dispatch)
              }
            ></OurPic>
            <OurText
              id="text12"
              value={fields.text12}
              onChange={(e) => editHandler(e, pageNumber, dispatch)}
              disabled={!active}
            ></OurText>
          </OurCard>
        </Grid>
      </Grid>{' '}
    </Grid>
  );
}

const placeholderImg =
  'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg';

Pecs12.fields = {
  pic1: placeholderImg,
  text1: 'Click to edit text',
  pic2: placeholderImg,
  text2: 'Click to edit text',
  pic3: placeholderImg,
  text3: 'Click to edit text',
  pic4: placeholderImg,
  text4: 'Click to edit text',
  pic5: placeholderImg,
  text5: 'Click to edit text',
  pic6: placeholderImg,
  text6: 'Click to edit text',
  pic7: placeholderImg,
  text7: 'Click to edit text',
  pic8: placeholderImg,
  text8: 'Click to edit text',
  pic9: placeholderImg,
  text9: 'Click to edit text',
  pic10: placeholderImg,
  text10: 'Click to edit text',
  pic11: placeholderImg,
  text11: 'Click to edit text',
  pic12: placeholderImg,
  text12: 'Click to edit text',
};

export default Pecs12;
