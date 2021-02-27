import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginPage from './loginPage'
import RegisterPage from './registerPage'
import HomeView from './homeView'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'

const Stack = createStackNavigator();

const homeViewNav = () => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="homeView" component={HomeView} options={{headerShown: false}}/>
        <Stack.Screen name="loginPage" component={LoginPage} options={{ title: 'Login to Shop!' }}/>
        <Stack.Screen name="registerPage" component={RegisterPage} options={{ title: 'Register for Service' }} />
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

export default homeViewNav