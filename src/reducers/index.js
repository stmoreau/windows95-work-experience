import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menuItems from './menuitems';
import popups from './popups';
import projects from './projects';

const rootReducer = combineReducers({
  menuItems,
  popups,
  projects,
  routing: routerReducer
});

export default rootReducer;
