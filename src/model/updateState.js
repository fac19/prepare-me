import schoolTemplate from '../storyTemplates/startingSchool';
import blankTemplate from '../storyTemplates/blankTemplate';
import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

/*
    updateState handles all state changes in our model.
    We pass this function to the useReducer hook to generate
    a "dispatch" function which we then pass down to our
    components via React's context mechanism. Components can
    then use this dispatch function to initiate state changes.
*/

const nameToStoryTemplate = {
  school: schoolTemplate,
  blank: blankTemplate,
};

// For each state change we be careful NOT to mutate the existing
// state. We call this function to make a clone of the existing
// state object. Note this is not a particularly efficient way to
// do this but it works and is simple. Maybe refactor it if testing
// shows this causes performace problems.
function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function updateState(state, command) {
  // Clone the state, make changes and return
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
      // destructure the vars we need from the command object
      const { template, pageNumber } = command;
      // get the template Component we need
      const selectedTemplate = getPageTemplateByName[template];
      // Create a newPage with those fields imported from template
      const newPage = {
        pageTemplate: template,
        // Copy it's default fields into the new page
        fields: selectedTemplate.fields,
      };
      // Splice it in after the current page
      copy.pages.splice(pageNumber, 0, newPage);
      return copy;
    }

    case 'delete page': {
      const { pageNumber } = command;
      copy.pages.splice(pageNumber - 1, 1);
      return copy;
    }

    default: {
      return copy;
    }
  }
}
export default updateState;
