import React from 'react';
import styled from 'styled-components';
import SiteContext from '../../model/SiteContext';

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

  function editHandler(event, pageNumber) {
    const newText = event.currentTarget.value;
    const fieldName = event.currentTarget.id;
    dispatch({ type: 'edit field', newText, fieldName, pageNumber });
  }

  return (
    <>
      <OurPic src={fields.pic1}></OurPic>
      <OurText
        id="text1"
        value={fields.text1}
        onChange={(e) => editHandler(e, pageNumber)}
      ></OurText>
    </>
  );
}
export default Landscape1;
