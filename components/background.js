import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';


const Background = () => {
  return (
    <View style={{ height: '90%', flexDirection: 'column' }}>
        <StatusBar style={{ color: 'lightgrey'}}></StatusBar>
        <View style={{flex: 1, backgroundColor: 'lightgrey'}}></View>
        <View style={{flex: 3, backgroundColor: 'grey'}}></View>
      </View>
  )
}

export default Background