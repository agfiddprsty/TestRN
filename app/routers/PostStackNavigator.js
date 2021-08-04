import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Post from '../screen/Post';
import AddPost from '../screen/AddPost';

const PostStack = createStackNavigator();

const PostStackNavigator = () => (
  <PostStack.Navigator>
    <PostStack.Screen name="Post" component={Post} />
    <PostStack.Screen name="AddPost" component={AddPost} />
  </PostStack.Navigator>
);

export default PostStackNavigator;
