import {GET_LIST, GET_ERROR, POST_SUCCESS} from '../types';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getList = () => async dispatch => {
  try {
    const res = await axios.get(url);
    dispatch({
      type: GET_LIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: console.log(e),
    });
  }
};

export const addPost = body => async dispatch => {
  try {
    const result = await axios.post(
      url,
      {
        body: JSON.stringify(body),
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=UTF8',
        },
      },
    );
    dispatch({
      type: POST_SUCCESS,
      payload: result,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: console.log(e),
    });
  }
};
