import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MakePost from './makePost'
import postsView from './postsView'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'

const Stack = createStackNavigator();

const PostsViewNav = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="postsView" component={postsView} options={{headerShown: false}} />
        <Stack.Screen name ="makePost" component={MakePost}  options={{ title: 'Make A Posting' }}/>
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
