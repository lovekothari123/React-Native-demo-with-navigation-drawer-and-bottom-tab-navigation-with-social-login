/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';

import app from './app/appReducer';
// import fetchLoginUserDataReducers from './reducers/fetchLoginUserDataReducer';
// import fetchUserStatesDataReducers from './reducers/fetchUserStatesDataReducers';
// import fetchCityDataReducers from './reducers/fetchCityDataReducers';
// import fetchUserRolesReducers from './reducers/fetchUserRolesReducers';
// import changePasswordReducer from './reducers/changePasswordReducer';
// import fetchSponsorDataReducers from './reducers/fetchSponsorDataReducers';
// import fetchQuizQuestionReducer from './reducers/fetchQuizQuestionReducer';
// import fetchAnsweredQuizQuestionReducer from './reducers/fetchAnsweredQuizQuestionReducer'
// import fetchGameSummaryDataReducer from './reducers/fetchGameSummaryDataReducer'
// import fetchGameDetailsReducer from './reducers/fetchGameDetailsReducer'
// import fetchLeaderboardReducer from './reducers/fetchLeaderboardReducer'
// import fetchUserBadgesDataReducers from './reducers/fetchUserBadgesDataReducers'

// import { DESTROY_SESSION } from '../utils/types';

export default (appReducer = combineReducers({app}));
