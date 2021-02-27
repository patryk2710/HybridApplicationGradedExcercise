import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text} from 'react-native'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import HomeView from './homeView'
import SearchView from './searchView'
import PostsView from './postsView'

const Tab = createBottomTabNavigator();

export default class Main extends Component {
  render() {
    return (
      <>
      <View style={ styles.root}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: 'lightgrey',
              inactiveTintColor: 'grey',
              style: {
                position: 'absolute',
                backgroundColor: 'darkgrey'
              },
              labelStyle: {
                fontSize: 12,
              },
            }}>
            <Tab.Screen 
              name="Home"
              component={HomeView}
              options={{
                tabBarIcon: ({ color, size}) => (
                  <MaterialIcons name="home" color={color} size={size} />)
              }}
            />
            <Tab.Screen 
              name="Search"
              component={SearchView}
              options={{
                tabBarIcon: ({ color, size}) => (
                  <MaterialIcons name="search" color={color} size={size} />)
              }}
            />
            <Tab.Screen 
              name="Posts"
              component={PostsView}
              options={{
                tabBarIcon: ({ color, size}) => (
                  <MaterialIcons name="list" color={color} size={size} />)
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    width: '100%',
  }
})