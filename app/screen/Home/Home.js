import React, {useState} from 'react';
import {View} from 'react-native';
import AddButton from '../../components/elements/AddButton/AddButton';
import TaskContextProvider from '../../context/TaskContext';
import TaskList from '../../components/TaskList/TaskList';
import styles from './Home.styles';
import ModalAddTask from '../../components/elements/Modal';

const Home = () => {
  const [modalAddTask, setModalAddTask] = useState(false);

  return (
    <View style={styles.container}>
      <TaskContextProvider>
        <TaskList />
        <AddButton
          add
          textRight="Add new task"
          onPress={() => setModalAddTask(true)}
        />
        {/* {modalAddTask && ( */}
        <ModalAddTask
          visible={modalAddTask}
          onPressNegative={() => setModalAddTask(false)}
        />
        {/* )} */}
      </TaskContextProvider>
    </View>
  );
};

export default Home;
