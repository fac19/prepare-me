import schoolTemplate from '../storyTemplates/startingSchool';
import blankTemplate from '../storyTemplates/blankTemplate';

import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

const nameToStoryTemplate = {
  school: schoolTemplate,
  blank: blankTemplate,
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function updateState(state, command) {
  const copy = clone(state);

  switch (command.type) {
    case 'load story template': {
      const { template } = command;
      copy.pages = nameToStoryTemplate[template].pages;
      return copy;
    }
    case 'edit field': {
      const { newText, fieldName, pageNumber } = command;
      copy.pages[pageNumber - 1].fields[fieldName] = newText;
      return copy;
    }
    case 'upload image': {
      const { url, fieldName, pageNumber } = command;
      copy.pages[pageNumber - 1].fields[fieldName] = url;
      return copy;
    }

    case 'add page': {
      const { template, pageNumber } = command;
      // get the template Component we need
      const selectedTemplate = getPageTemplateByName[template];
      // Create a newPage with those fields imported from template
      const newPage = {
        pageTemplate: template,
        // copy it's default fields into the new page
        fields: selectedTemplate.fields,
      };
      copy.pages.splice(pageNumber, 0, newPage);
      return copy;
    }

    case 'delete page': {
      const { pageNumber } = command;
      console.log('updateState -> pageNumber', pageNumber);
      copy.pages.splice(pageNumber - 1, 1);
      return copy;
    }

    default: {
      return copy;
    }
  }
}
export default updateState;
