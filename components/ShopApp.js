import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeViewNav from './homeViewNav'
import SearchView from './searchView'
import PostsViewNav from './postsViewNav'

const Tab = createBottomTabNavigator();

export default class ShopApp extends Component {

  constructor(props) {

    super(props);
    this.state = {
      postings: []
    }    
  }

  // componentDidMount() {
  //   console.log('getting postings');
  //   fetch(this.props.apiURI + '/todosJWT', {
  //     method: 'GET',
  //     headers: {
  //       "Authorization": "Bearer " + this.props.jwt
  //     }
  //   })
  //   .then(response => {
  //     if (response.ok == false) {
  //       throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
  //     }
  //     return response.json();
  //   })
  //   .then(json => {
  //     console.log("Todos GET successful")
  //     console.log("Received following JSON");
  //     console.log(json);

  //     this.setState({ todos: json})
  //   })
  //   .catch(error => {
  //     console.log("Error message:")
  //     console.log(error.message)
  //   });
  // }
  

  // onTodoAdd = (description, dueDate) => {
  //   fetch(this.props.apiURI + '/todosJWT', {
  //     method: 'POST',
  //     headers: {
  //       "Authorization": "Bearer " + this.props.jwt,
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ description, dueDate })
  //   })
  //   .then(response => {
  //     if (response.ok == false) {
  //       throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
  //     }
  //     return response.json();
  //   })
  //   .then(json => {
  //     console.log("Todos POST successful")
  //     console.log("Received following JSON");
  //     console.log(json);

  //     this.setState({ todos: json})
  //   })
  //   .catch(error => {
  //     console.log("Error message:")
  //     console.log(error.message)
  //   });
  // }

  render() {
    return (
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
              component={HomeViewNav}
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
              component={PostsViewNav}
              options={{
                tabBarIcon: ({ color, size}) => (
                  <MaterialIcons name="list" color={color} size={size} />)
              }}
            />
      </Tab.Navigator>
    )
  }
}
