import { createStore, applyMiddleware} from 'redux';
import {reducer} from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const valueReduser = (state = 10, {type, playload }) => {
  switch (type) {
    case 'caunter/Increment':
      return state + playload;

    case 'counter/Decrement':
      return state - playload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

const counterReducer = combineReducers ({
  value: valueReduser,
  step: stepReducer,
});

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore (rootReducer, devToolscomposeWithDevTools());

export default store;

// const reducer = (state = initialState,{type, paylpad }) => {}
// const reducer = (state=[], action) => {
//   switch(action.type) {
//     case "ADD_MEMBER":                   
//     return [...state, {categoryID: 0, name: "Bill", zip: "27733", id: 4}]         
//     default:
//       return state
//     }
//     return state;
//   }
  // let store = createStore (reducer, devToolsEnhancer(appMiddlewarse));