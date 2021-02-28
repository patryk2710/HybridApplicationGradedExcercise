import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MakePost from './makePost'
import postsView from './postsView'
import PostSuccess from './postSuccess'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'

const Stack = createStackNavigator();

const PostsViewNav = (props) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="postsView" component={postsView} options={{headerShown: false}} />
        <Stack.Screen name ="makePost" children={()=><MakePost {...props} />}  options={{ title: 'Make A Posting' }}/>
        <Stack.Screen name = "postSuccess" children={()=><PostSuccess {...props} />}  options={{ title: 'Make A Posting' }} />
      </Stack.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  test: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  backgroundTop: {
    flex: 1, 
    backgroundColor: 'grey', 
    justifyContent: 'center',
  },
  backgroundBottom: {
    flex:3, 
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  }
})

export default PostsViewNav
