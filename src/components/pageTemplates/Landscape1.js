import React from 'react';
import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 100%;
  height: 60%;
`;

const OurPic = styled.img`
  width: 100%;
  height: 40%;
`;

function Landscape1({ pageNumber, fields }) {
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
    </>
  );
}
export default Landscape1;
