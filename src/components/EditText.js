import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import SiteContext from '../model/SiteContext';
import editHandler from './pageTemplates/editHandler';

const MyTextEditor = styled(ReactQuill)`
  width: 60vw;
`;

const EditText = ({ fields, pageNumber, id }) => {
  const [, dispatch] = React.useContext(SiteContext);

  const modules = {
    toolbar: [
      [{ size: ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ align: [] }],
      [{ color: [] }],
    ],
  };

  const formats = [
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'color',
  ];

  return (
    <>
      <MyTextEditor
        theme="snow"
        modules={modules}
        formats={formats}
        value={fields.text1}
        onChange={(content, delta, source, editor) => {
          console.log('editor getText', editor.getText()); // plain text
          console.log('EditText -> editor', editor);
          // console.log('EditText -> id', id);

          editHandler(content, id, pageNumber, dispatch);
        }}
      />
      {/* (e)=> editHandler(e, pageNumber, dispatch) */}
    </>
  );
};

export default EditText;
