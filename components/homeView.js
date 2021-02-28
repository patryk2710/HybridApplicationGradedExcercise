import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TopBarHome from './topBarHome'

const homeView = (props) => {

  return (
    <View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <View style={styles.backgroundTop}>
        <TopBarHome {...props} style={{flex: 1}}></TopBarHome>
      </View>
      <View style={styles.backgroundBottom}>
        <Text style={styles.test}>This is the Home Component</Text>
      </View>
    </View>
  )
}

//<Button color="dimgrey" title="Logout" onPress={() => props.onLogout()}></Button>

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
    justifyContent: 'center' 
  },
  backgroundBottom: {
    flex:3, 
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  }
})

export default homeView