import {combineReducers} from 'redux';

import assign from './assign';
import log from './log';
import monitoring from './monitoring';
import review from './review';
import session from './session';
import user from './user';

export default combineReducers({
    assign, log, monitoring, review, session, user
});
