/*
  This object hold the site's initial state. It is used to initialise the useReducer function in app.js. By default it just contains an empty array called pages although there is no reason more properties can't be added as required. 
  
  The pages array is where we keep page records, one for each page of the story. Page records are objects that contain the name of the page template and values for each field in that template. Examples of page records can be found in each of the story templates in the src/storyTemplates folder. Loading story templates (in updateState) is the process of copying their page records copied into the pages array.
*/

const initialState = {
  pages: [],
};

export default initialState;
