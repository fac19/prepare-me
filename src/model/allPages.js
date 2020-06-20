import React from 'react';
import styled from 'styled-components';
import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

/*
   This file creates an array containing every page in the story. The intent was that it would be consumed by both the Print routine and the PDF generation routine but right now it is only used by Print.
*/

const OurPaper = styled.div`
  page-break-before: always;
  height: 90vh;
`;

function allPages(state) {
  const pages = [];
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    const fields = item.fields;

    // Get the template component for the page we are on
    const templateName = item.pageTemplate;
    const Page = getPageTemplateByName[templateName];

    // Render each component with the right fields and
    // push it onto the array.
    pages.push(
      <OurPaper key={index}>
        <Page fields={fields} />
      </OurPaper>,
    );
  });

  return pages;
}

export default allPages;
