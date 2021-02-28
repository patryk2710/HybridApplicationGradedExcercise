import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import MakePost from './makePost'
import { createStackNavigator } from '@react-navigation/stack'

const postsView = (props) => {
  return (
    <View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <View style={styles.backgroundTop}>
        <View style={styles.topBar}>
          <Text style={styles.test}>Postings</Text>
          <Button color="dimgrey" title="Make Posting" onPress={() => props.navigation.navigate('makePost')}></Button>
        </View>
      </View>
      <View style={styles.backgroundBottom}>
        <Text style={styles.test}>This is the Postings Component</Text>
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
    paddingRight: 40,
    paddingTop: 30
  },
  backgroundTop: {
    flex: 1, 
    backgroundColor: 'grey', 
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 18
  },
  backgroundBottom: {
    flex:3, 
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  },
  topBar: {
    flex: 1, 
    backgroundColor: 'grey', 
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20
  },

})

export default postsView
