import PropTypes from 'prop-types';
import React, {useContext, useState, useEffect} from 'react';
import uuid from 'react-native-uuid';
import {
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
} from 'react-native';
import {TaskContext} from '../../../context/TaskContext';
import styles from './Modal.styles';
import {Action} from '../../../reducer/taskReducer';
// import Button from '../Button';

const ModalAddTask = props => {
  const {dispatch} = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [visible, setVisible] = useState({...props.visible});

  const addTask = () => {
    dispatch({
      type: Action.ADD_TASK,
      task: {
        id: uuid.v1(),
        isChecked: false,
        title: title,
        desc: desc,
      },
    });
    props.onPressNegative();
    setVisible(false);
    setTitle('');
    setDesc('');
  };

  useEffect(() => {
    console.log(props);
    setVisible(props.visible);
  }, [props]);

  const _closeModal = () => {
    const {onPressNegative} = props;
    setVisible(false);
    onPressNegative();
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={_closeModal}>
      <StatusBar backgroundColor="rgba(82,87,92,0.8)" animated />
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={_closeModal}
      />
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text>Name :</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#52575C"
            onChangeText={na => setTitle(na)}
            value={title}
            placeholder="Task Name"
          />
          <Text>Desctiption :</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#52575C"
            onChangeText={d => setDesc(d)}
            value={desc}
            placeholder="Task Desctiption"
            multiline={true}
          />
          <View style={styles.buttons}>
            <View style={styles.buttonSuccess} />
            <Button style={styles.button} onPress={addTask} title="add" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

// export default class ModalConfirmation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newTask: {},
//       visible: false,
//     };
//   }

//   static contextType = Context;

//   componentWillReceiveProps(nextProps) {
//     const visible = _.get(nextProps, 'visible', '');
//     this.setState({visible});
//   }

//   _closeModal = () => {
//     const {onPressNegative} = this.props;
//     this.setState({visible: false});
//     onPressNegative();
//   };

//   _onPressLeft = () => {
//     const {onPressPositif} = this.props;
//     this._closeModal();
//     this.context.addNewTask(this.state.newTask);
//     onPressPositif();
//   };

// const {rightButtonTitle} = this.props;
// const {visible} = this.state;

ModalAddTask.propTypes = {
  onPressPositif: PropTypes.func,
  visible: PropTypes.bool,
};

ModalAddTask.defaultProps = {
  onPressNegative: () => {},
  visible: false,
};

export default ModalAddTask;
