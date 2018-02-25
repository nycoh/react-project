import {
    REGIONAL_INFO_FETCHED,
    SAVE_REGIONAL_ASSIGN,
    SAVE_SUCCESS
} from '../actions/assign';


export default function assign(state = {saving: false}, action) {
    switch (action.type) {
        case REGIONAL_INFO_FETCHED:
            return {...state, regional: action.regional};
        case SAVE_REGIONAL_ASSIGN:
            return {...state, saving: true};
        case SAVE_SUCCESS:
            return {...state, saving: false};
        default:
            return state;
    }
}
