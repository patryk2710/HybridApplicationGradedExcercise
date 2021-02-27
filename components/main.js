import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Text} from 'react-native'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialIcons } from '@expo/vector-icons';
import HomeViewNav from './homeViewNav'
import SearchView from './searchView'
import PostsViewNav from './postsViewNav'

import RegisterPage from './registerPage'
import RegisterDone from './registerDone'
import LoginPage from './loginPage'
import * as SecureStore from 'expo-secure-store'
import LoadingPage from './LoadingPage'
import ShopApp from './ShopApp'

import HomeView from './homeView'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const secureStoreTokenName = "test1";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCheckingTokenStorage: true,
      activeJWT: null
    };
  }

  componentDidMount() {
    // Check for stored JWT when the application loads
    SecureStore.getItemAsync(secureStoreTokenName)
      .then(response => {
        console.log("SecureStore.getItemAsync success")        
        this.setState({ activeJWT: response, isCheckingTokenStorage: false })
      })
      .catch(error => {
        console.log("SecureStore.getItemAsync error")
        console.log(error);
      });
  }

  onLoginReceiveJWT = (responseJWT) => {
    // Deal with successful login by storing the token into secure store
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        this.setState({ activeJWT: responseJWT, isCheckingTokenStorage: false })
      })    
  }

  authLogic = () => {
    const authScreens = (
      <>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          { props => <LoginPage {...props} onLoginReceiveJWT={ this.onLoginReceiveJWT } apiURI={ this.props.apiURI }></LoginPage> }
        </Stack.Screen>
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false,
          }}
        >
          { props => <RegisterPage {...props} apiURI={ this.props.apiURI }></RegisterPage>}
        </Stack.Screen>
        <Stack.Screen
          name="RegisterDone"
          options={{
            headerShown: false,
          }}
        >
          { props => <RegisterDone {...props}></RegisterDone>}
        </Stack.Screen>
      </Stack.Navigator>
      </>
    );

    const app = (
      <>
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
      </>
    )

    const checkingForTokenStorage = (
      <Stack.Screen name="Loading" component={LoadingPage} />
    )

    if(this.state.isCheckingTokenStorage)
    {
      console.log('Checking is token stored');
      return checkingForTokenStorage;
    }
    else
    {
      if(this.state.activeJWT != null)
      {
        console.log('JWT Token found, displaying application logged in views');
        return app;
      }
      else
      {
        console.log('JWT Token not found, displaying application authentication views');
        return authScreens;
      }
    }
  }

  onLogout = () => {
    console.log("Logout clicked");
    this.setState({ activeJWT: null });
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

  render() {
    return (
      <>
      <View style={styles.root}>
        <NavigationContainer>
          { this.authLogic() }
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