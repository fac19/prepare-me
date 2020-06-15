import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import editHandler from './editHandler';
// import SiteContext from '../../model/SiteContext';
// import uploadImageHandler from './uploadImageHandler';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const MyTextEditor = styled(ReactQuill)`
  width: 60vw;
`;

const EditText = () => {
  const modules = {
    toolbar: [
      [],
      ['bold', 'italic', 'underline'],
      [
        // { list: 'ordered' },
        // { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
    ],
  };
  const formats = [
    'bold',
    'italic',
    'underline',
    // 'list',
    // 'bullet',
    'indent',
  ];
  return (
    <MyTextEditor
      id="quill1"
      theme="snow"
      modules={modules}
      formats={formats}
      //   value={fields.text1}
      // onChange={(e) => editHandler(e, pageNumber, dispatch)}
    ></MyTextEditor>
  );
};

export default EditText;
