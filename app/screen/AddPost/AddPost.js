import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './AddPost.styles';
import {addPost} from '../../store/actions/listAction';

const AddNewPost = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const onClickPost = () => {
    const body = {
      userId: 1,
      title,
      body: desc,
    };

    dispatch(addPost(body));
    navigation.goBack();
    setTitle('');
    setDesc('');
  };

  return (
    <View style={styles.container}>
      <Text>Title :</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#52575C"
        onChangeText={na => setTitle(na)}
        value={title}
        placeholder="Title"
      />
      <Text>Body :</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#52575C"
        onChangeText={d => setDesc(d)}
        value={desc}
        placeholder="Body"
        multiline={true}
      />
      <View style={styles.buttons}>
        <View style={styles.buttonSuccess} />
        <Button style={styles.button} onPress={onClickPost} title="add" />
      </View>
    </View>
  );
};

export default AddNewPost;
