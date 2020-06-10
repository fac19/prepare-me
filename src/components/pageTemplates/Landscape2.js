import React from 'react';
import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 100%;
  height: 20%;
`;

const OurPic = styled.img`
  width: 100%;
  height: 25%;
  object-fit: contain;
`;

function Landscape2({ pageNumber, fields }) {
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <>
      <OurPic
        src={fields.pic1}
        id="pic1"
        onClick={(e) => uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      <OurText
        id="text1"
        value={fields.text1}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
      ></OurText>
      <OurPic
        src={fields.pic2}
        id="pic2"
        onClick={(e) => uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      <OurText
        id="text2"
        value={fields.text2}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
      ></OurText>
    </>
  );
}

export default Landscape2;
