import {combineReducers} from '@reduxjs/toolkit';
import AuthCheckFunc from './AuthCheckFunc';
import carDataCollector from './CarsDataCollector';
const rootReducers = combineReducers({
  AuthCheck: AuthCheckFunc,
  carAllData: carDataCollector,
});
export default rootReducers;
