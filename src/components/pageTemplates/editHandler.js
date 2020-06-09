function editHandler(event, pageNumber, dispatch) {
  const newText = event.currentTarget.value;
  const fieldName = event.currentTarget.id;
  dispatch({ type: 'edit field', newText, fieldName, pageNumber });
}

export default editHandler;
