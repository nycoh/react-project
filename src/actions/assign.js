export const FETCH_REGIONAL_INFO = 'FETCH_REGIONAL_INFO';
export const REGIONAL_INFO_FETCHED = 'REGIONAL_INFO_FETCHED';
export const SAVE_REGIONAL_ASSIGN = 'SAVE_REGIONAL_ASSIGN';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';

export const fetchRegionalInfo = () => ({type: FETCH_REGIONAL_INFO});
export const regionalInfoFetched = regionalData => ({type: REGIONAL_INFO_FETCHED, regional: regionalData});
export const saveRegionalAssing = assingRegional => ({type: SAVE_REGIONAL_ASSIGN, assingRegional});
export const saveSuccess = () => ({type: SAVE_SUCCESS});
