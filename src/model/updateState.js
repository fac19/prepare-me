import schoolTemplate from '../storyTemplates/startingSchool';
import blankTemplate from '../storyTemplates/blankTemplate';

const nameToTemplate = {
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
      copy.pages = nameToTemplate[template].pages;
      return copy;
    }
    default: {
      return copy;
    }
  }
}
export default updateState;
