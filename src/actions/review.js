export const FETCH_STATES = 'FETCH_STATES';
export const STATES_FETCHED = 'STATES_FETCHED';

export const fetchStates = () => ({type: FETCH_STATES});
export const statesFetched = states => ({type: STATES_FETCHED, states});

export const FETCH_ADDITIONAL_INFO = 'FETCH_ADDITIONAL_INFO';
export const ADDITIONAL_INFO_FETCHED = 'ADDITIONAL_INFO_FETCHED';

export const fetchAdditionalInfo = stateId => ({type: FETCH_ADDITIONAL_INFO, stateId});
export const addionalInfoFetched = additionalInfo => ({type: ADDITIONAL_INFO_FETCHED, additionalInfo});

export const FETCH_SURVEYS = 'FETCH_SURVEYS';
export const SURVEYS_FETCHED = 'SURVEYS_FETCHED';

export const fetchSurveys = searchParams => ({type: FETCH_SURVEYS, searchParams});
export const surveysFetched = surveys => ({type: SURVEYS_FETCHED, surveys});

export const FETCH_SURVEY = 'FETCH_SURVEY';
export const SURVEY_FETCHED = 'SURVEY_FETCHED';

export const fetchSurvey = (id, stateId) => ({type: FETCH_SURVEY, id, stateId});
export const surveyFetched = survey => ({type: SURVEY_FETCHED, survey});

export const SAVE_REASSIGN = 'SAVE_REASSIGN';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';

export const saveReassign = (id, pollster) => ({type: SAVE_REASSIGN, id, pollster});
export const saveSuccess = () => ({type: SAVE_SUCCESS});

export const SAVE_APROVE = 'SAVE_APROVE';

export const saveAprove = id => ({type: SAVE_APROVE, id});
