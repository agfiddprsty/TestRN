import React, {useContext} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TaskContext} from '../../context/TaskContext';
import {Action} from '../../reducer/taskReducer';
import styles from './TaskList.styles';

const TaskList = () => {
  const {sortedTasks, dispatch} = useContext(TaskContext);

  const onChecked = (id, isChecked) => {
    dispatch({
      type: Action.CHECK_TASK,
      task: {
        id,
        isChecked,
      },
    });
  };

  const onDelete = id => {
    dispatch({
      type: Action.DELETE_TASK,
      id: id,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedTasks}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.rowcontainer}>
              <TouchableOpacity
                style={styles.checkBox}
                onPress={() => onChecked(item.id, !item.isChecked)}>
                <MaterialCommunityIcons
                  name={
                    item.isChecked
                      ? 'checkbox-marked-outline'
                      : 'checkbox-blank-outline'
                  }
                  size={30}
                  color={item.isChecked ? '#3BA064' : '#000'}
                />
              </TouchableOpacity>
              <View style={styles.containerContent}>
                <Text
                  style={item.isChecked ? styles.textCheck : styles.text}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {item.title}
                </Text>
                <Text
                  style={
                    item.isChecked ? styles.textDescCheck : styles.textDesc
                  }>
                  {item.desc}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.delete}
                onPress={() => onDelete(item.id)}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={30}
                  color="#ff0000"
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TaskList;
