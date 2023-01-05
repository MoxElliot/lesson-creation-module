import { combineReducers } from 'redux';
import messageDataSlice from '../slices/messageDataSlice';
import lessonDataSlice from '../slices/lessonDataSlice';
import weekNavSlice from '../slices/weekNavSlice';
import usersSlice from '../slices/usersSlice';
import lessonControlSlice from '../slices/lessonControlSlice';

const rootReducer = combineReducers({
    messageData: messageDataSlice,
    lessonData: lessonDataSlice,
    weekNav: weekNavSlice,
    users: usersSlice,
    lessonControl: lessonControlSlice,
})

export default rootReducer;