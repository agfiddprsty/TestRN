/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddButton from '../../components/elements/AddButton/AddButton';
import Loading from '../../components/elements/Loading/Loading';
import {getList} from '../../store/actions/listAction';
import styles from './Post.styles';

const Post = ({navigation}) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.lists);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <View>
      {list.loading === true && <Loading />}
      <FlatList
        data={list.list}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.rowcontainer}>
              <View style={styles.containerContent}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.textDesc}>{item.body}</Text>
              </View>
            </View>
          );
        }}
      />
      <AddButton
        add
        textRight="New Post"
        onPress={() => navigation.navigate('AddPost')}
      />
    </View>
  );
};

export default Post;
