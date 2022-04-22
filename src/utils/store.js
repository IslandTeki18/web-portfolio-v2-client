import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDetailsReducer, userLoginReducer, userUpdateReducer } from "../redux/reducers/userReducers";
import {
  projectCreateReducer,
  projectDeleteReducer,
  projectDetailsReducer,
  projectListReducer,
  projectUpdateReducer,
  projectFeedbackCreateReducer,
  projectDeleteFeedbackReducer
} from "../redux/reducers/projectReducers";
import {
  contactCreateReducer,
  contactDeleteReducer,
  contactListReducer,
  contactUpdateReducer,
  contactDetailsReducer,
} from "../redux/reducers/contactReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  projectCreate: projectCreateReducer,
  projectDelete: projectDeleteReducer,
  projectDetails: projectDetailsReducer,
  projectList: projectListReducer,
  projectUpdate: projectUpdateReducer,
  projectFeedbackCreate: projectFeedbackCreateReducer,
  projectDeleteFeedback: projectDeleteFeedbackReducer,
  contactList: contactListReducer,
  contactDetails: contactDetailsReducer,
  contactCreate: contactCreateReducer,
  contactDelete: contactDeleteReducer,
  contactUpdate: contactUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
