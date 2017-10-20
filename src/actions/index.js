import * as types from '../constants/actiontypes';

export function openPopup(title) {
  return {
    type: types.OPEN_POPUP,
    title
  };
}

export function closePopup(title) {
  return {
    type: types.CLOSE_POPUP,
    title
  };
}

export function openProject(title) {
  return {
    type: types.OPEN_PROJECT,
    title
  };
}

export function closeProject(title) {
  return {
    type: types.CLOSE_PROJECT,
    title
  };
}