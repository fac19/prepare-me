function editHandler(content, fieldName, pageNumber, dispatch) {
  // console.log(newText, fieldName);
  const newText = content.replace(/(<([^>]+)>)/g, '');
  console.log('text', newText);
  dispatch({ type: 'edit field', newText, fieldName, pageNumber });
}

export default editHandler;
