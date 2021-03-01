import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginPage from './loginPage'
import RegisterPage from './registerPage'
import HomeView from './homeView'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'

const Stack = createStackNavigator();

const homeViewNav = (props) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="homeView" children={()=><HomeView {...props} />}  options={{headerShown: false}}/>
        <Stack.Screen name="loginPage" component={LoginPage} options={{ title: 'Login to Shop!' }}/>
      </Stack.Navigator>
    </View>
  )
}

export default homeViewNav
