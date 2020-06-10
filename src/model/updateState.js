import schoolTemplate from '../storyTemplates/startingSchool';
import blankTemplate from '../storyTemplates/blankTemplate';
import Landscape1 from '../components/pageTemplates/Landscape1';
import Landscape2 from '../components/pageTemplates/Landscape2';

const nameToStoryTemplate = {
  school: schoolTemplate,
  blank: blankTemplate,
};

const nameToPageTemplate = {
  Landscape1: Landscape1,
  Landscape2: Landscape2,
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

    case 'add page': {
      const { template, pageNumber } = command;
      // get the template Component we need
      const selectedTemplate = nameToPageTemplate[template];
      // Create a newPage with those fields imported from template
      const newPage = {
        pageTemplate: template,
        // copy it's default fields into the new page
        fields: selectedTemplate.fields,
      };
      copy.pages.splice(pageNumber, 0, newPage);
      return copy;
    }

    default: {
      return copy;
    }
  }
}
export default updateState;
