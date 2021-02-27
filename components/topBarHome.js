import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LogoMessage from './logoMessage'
import NameDisplay from './nameDisplay'

const TopBarHome = () => {
  return (
    <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{flex:1, paddingLeft: 10, justifyContent: 'center'}}>
        <LogoMessage style={{flex: 1}}></LogoMessage>
      </View>
      <View style={{flex:1, justifyContent: 'center'}}>
        <NameDisplay style={{flex: 1}}></NameDisplay>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
})

export default TopBarHome