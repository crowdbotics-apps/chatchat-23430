import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn48186256Reducer from '../features/SignIn48186256/redux/reducers'
import Dashboard19186255Reducer from '../features/Dashboard19186255/redux/reducers'
import CalendarView4186254Reducer from '../features/CalendarView4186254/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn48186256: SignIn48186256Reducer,
Dashboard19186255: Dashboard19186255Reducer,
CalendarView4186254: CalendarView4186254Reducer,

});