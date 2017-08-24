export function getUpdateAction(put, propName, propValue, cost) {
  const action = {
    type: 'propValues/updateValues',
    payload: {
      propName,
      propValue,
      cost
    }
  };
  return action;
}

export function countValue(dispatch, propName, adds) {
  dispatch({
    type: 'propValues/updateValues',
    payload: {
      propName,
      adds
    }
  });
}