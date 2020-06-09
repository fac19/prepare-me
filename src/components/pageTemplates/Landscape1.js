import React from 'react';
import styled from 'styled-components';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import { Link } from 'react-router-dom';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 100%;
  height: 50%;
`;

const OurPic = styled.img`
  width: 100%;
  height: 40%;
`;

function Landscape1({ pageNumber, fields }) {
  const [, dispatch] = React.useContext(SiteContext);
  return (
    <>
      <OurPic src={fields.pic1}></OurPic>
      <OurText
        id="text1"
        value={fields.text1}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
      ></OurText>
      <Link to={`/story-page/${pageNumber + 1}`}>Next Page >>></Link>
    </>
  );
}
export default Landscape1;
