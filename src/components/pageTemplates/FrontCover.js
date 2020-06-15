import React from 'react';
import styled from 'styled-components';
import logo from '../../static/pm.png';
import editHandler from './editHandler';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';

const Logo = styled.img`
  width: 15vw;
  height: auto;
  top: 15vh;
  left: 30vw;
`;

const OurTitle = styled.textarea`
  margin: 1rem;
  text-align: center;
  font-size: 1.4rem;
`;

const OurPic = styled.img`
  width: 100%;
  height: 40%;
  object-fit: contain;
`;

const MyDiv = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function FrontCover({ pageNumber, fields }) {
  const [, dispatch] = React.useContext(SiteContext);

  return (
    <MyDiv>
      <OurPic
        src={fields.pic1}
        id="pic1"
        onClick={(e) => uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      <OurTitle
        id="text1"
        value={fields.text1}
        onChange={(e) => editHandler(e, pageNumber, dispatch)}
      ></OurTitle>
      <Logo src={logo} />
    </MyDiv>
  );
}
export default FrontCover;
