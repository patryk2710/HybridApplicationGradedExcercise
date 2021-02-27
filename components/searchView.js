import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TopBarSearch from './topBarSearch'

const searchView = () => {
  return (
    <View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <View style={styles.backgroundTop}>
        <TopBarSearch style={{flex: 1}}></TopBarSearch>
      </View>
      <View style={styles.backgroundBottom}>
        <Text style={styles.test}>This is the Search Component</Text>
      </View>
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

export default searchView
