import {
    FETCH_STATES,
    STATES_FETCHED,
    FETCH_ADDITIONAL_INFO,
    ADDITIONAL_INFO_FETCHED,
    FETCH_SURVEYS,
    SURVEYS_FETCHED,
    FETCH_SURVEY,
    SURVEY_FETCHED,
    SAVE_REASSIGN,
    SAVE_APROVE,
    SAVE_SUCCESS
} from '../actions/review';

const defaultState = {loading: true};

export default function review(state = defaultState, action) {
    switch (action.type) {
        case FETCH_STATES:
            return {...state, loading: true, surveys: null};
        case FETCH_ADDITIONAL_INFO:
        case FETCH_SURVEYS:
        case FETCH_SURVEY:
        case SAVE_REASSIGN:
        case SAVE_APROVE:
            return {...state, loading: true};
        case STATES_FETCHED:
            return {
                ...state, loading: false, states: action.states, surveys: null
            };
        case ADDITIONAL_INFO_FETCHED:
            return {...state, loading: false, additionalInfo: action.additionalInfo};
        case SURVEYS_FETCHED:
            return {...state, loading: false, surveys: action.surveys};
        case SURVEY_FETCHED:
            return {...state, loading: false, survey: action.survey};
        case SAVE_SUCCESS:
            return {...state, loading: false};
        default:
            return state;
    }
}
