import React from 'react';
import styled from 'styled-components';
import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

/*
   This file creates an array containing every page in the story. It is consumed by both the Print routine and the PDF generation routine.
*/

// Break this out into separate Papers for Print and DL
// Break this out into separate Papers for Print and DL
// Break this out into separate Papers for Print and DL
const OurPaper = styled.div`
  page-break-before: always;
  height: 780pt;
  width: 595pt;
`;

function allPages(state) {
  const pages = [];
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    const fields = item.fields;

    // Get the template component for the page we are on
    const templateName = item.pageTemplate;
    console.log('Geting template:', templateName);
    const Page = getPageTemplateByName[templateName];

    // Render each component with the right fields and
    // push it onto the array.
    pages.push(
      <OurPaper key={index} className="pageframe">
        <Page fields={fields} />
      </OurPaper>,
    );
  });

  return pages;
}

export default allPages;
