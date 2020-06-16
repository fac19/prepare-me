import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SiteContext from '../../model/SiteContext';
import uploadImageHandler from './uploadImageHandler';
import TextEditor from '../EditText';

const OurText = styled.textarea`
  font-family: 'Short Stack', cursive;
  font-size: 2vh;
  width: 100%;
  height: 60%;
`;

const OurPic = styled.img`
  width: 100%;
  height: 40%;
  object-fit: contain;
`;

function Landscape1({ pageNumber, fields }) {
  const [, dispatch] = React.useContext(SiteContext);
  // const history = useHistory();

  // const handleTextEdit = (event, pageNumber) => {
  //   history.push({
  //     pathname: '/edit-text',
  //     params: { fieldName: event.target.id, pageNumber },
  //   });
  // };

  return (
    <>
      <OurPic
        src={fields.pic1}
        id="pic1"
        onClick={(e) => uploadImageHandler(e, pageNumber, dispatch)}
      ></OurPic>
      {/* <OurText
        id="text1"
        // component={Link}
        // to="/edit-text"
        // onClick={(event) => handleTextEdit(event, pageNumber)}
      ></OurText> */}

      <TextEditor
        id="text1"
        pageNumber={pageNumber}
        fields={fields}
      ></TextEditor>
    </>
  );
}

Landscape1.fields = {
  pic1:
    'https://res.cloudinary.com/didur5psx/image/upload/v1591714780/starting_school/yourpic_rjemqq.jpg',
  text1: 'Click to edit text',
};

export default Landscape1;
