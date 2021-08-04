import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY} from '../constants';

const checkLocal = async () => {
  const local = await AsyncStorage.getItem('tasks');
  if (local) {
    return JSON.parse(local);
  } else {
    return [];
  }
};

const initialState = {
  tasks: checkLocal,
};

export const Action = {
  ADD_TASK: 'add-task',
  CHECK_TASK: 'check-task',
  DELETE_TASK: 'delete-task',
};

export const taskReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case Action.ADD_TASK:
      const list = [...state, action.task];
      AsyncStorage.setItem(STORAGE_KEY.TASKS, JSON.stringify(list));
      return [...state, action.task];

    case Action.CHECK_TASK:
      let index = state.findIndex(t => t.id === action.task.id);
      state[index].isChecked = action.task.isChecked;
      const listChecked = state.filter(task => task.id !== action.id);
      AsyncStorage.setItem(STORAGE_KEY.TASKS, JSON.stringify(listChecked));
      return state.filter(task => task.id !== action.id);

    case Action.DELETE_TASK:
      const listDeleted = state.filter(task => task.id !== action.id);
      AsyncStorage.setItem(STORAGE_KEY.TASKS, JSON.stringify(listDeleted));
      return state.filter(task => task.id !== action.id);

    default:
      return state;
  }
};
