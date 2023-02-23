import axios from 'axios';
import {baseUrl} from './Config';
import {AuthCheck} from '../Reducers/AuthCheckFunc';
import {useDispatch} from 'react-redux';
//registering user
export const registerUser = async body => {
  console.log('data', body);
  try {
    const response = await axios.post(`api/signup`, body);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const loginUser = async body => {
  console.log('data', body);
  try {
    const response = await axios.post(`api/login`, body);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const getCars = async () => {
  try {
    const response = await axios.get(`api/cars`);
    const data = response.data.cars;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// getting by category a filter api taking two arguments
export const getFilterData = async (type, value) => {
  console.log(`api/cars?${type}=${value}`);
  try {
    const response = await axios.get(`api/cars?${type}=${value}`);
    console.log('res', response.data.cars);
    const data = response.data.cars;
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const updateCarData = async (id, body) => {
  try {
    const response = await axios.patch(`api/cars/${id}`, body);
    const data = response;
    console.log('-------', response);
  } catch (error) {
    console.error(error);
  }
};
export const deleteACar = async id => {
  console.log('id', id);
  try {
    const response = await axios.delete(`api/cars/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const createANewListing = async data => {
  try {
    const response = await axios.post(`api/cars`, data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
