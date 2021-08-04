import {GET_LIST, POST_SUCCESS} from '../types';

const initialState = {
  list: [],
  tesAddPost: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case POST_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        addPost: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
