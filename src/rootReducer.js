import { combineReducers } from "redux";
import flyingObjectsReducer from "./components/Table/redux";

const rootReducer = combineReducers({
  flyingObjectsReducer: flyingObjectsReducer,
});

export default rootReducer;
