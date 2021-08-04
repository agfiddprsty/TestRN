import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useReducer, useEffect} from 'react';
import {STORAGE_KEY} from '../constants';
import {taskReducer} from '../reducer/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = props => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  let sortedTasks = tasks.sort((t, f) =>
    f.isChecked === t.isChecked ? 0 : f.isChecked ? -1 : 1,
  );

  const getLocal = async () => {
    if (!sortedTasks) {
      try {
        await AsyncStorage.setItem(
          STORAGE_KEY.TASKS,
          JSON.stringify(sortedTasks),
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const local = await AsyncStorage.getItem(STORAGE_KEY.TASKS);
        if (local) {
          sortedTasks = JSON.parse(local);
        } else {
          sortedTasks = tasks.sort((t, f) =>
            f.isChecked === t.isChecked ? 0 : f.isChecked ? -1 : 1,
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getLocal();
  });

  return (
    <TaskContext.Provider value={{tasks, sortedTasks, dispatch}}>
      {props.children}
    </TaskContext.Provider>
  );
};
export default TaskContextProvider;
