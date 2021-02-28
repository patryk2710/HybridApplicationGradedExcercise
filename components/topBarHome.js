import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LogoMessage from './logoMessage'
import { useNavigation } from '@react-navigation/native'

const TopBarHome = (props) => {

  return (
    <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{flex:1, paddingLeft: 10, justifyContent: 'center'}}>
        <LogoMessage style={{flex: 1}}></LogoMessage>
      </View>
      <View style={{flex:1, justifyContent: 'center'}}>
      <Text style={styles.text}>{ props.name}</Text>
      <View style={styles.filler}></View>
      <Button color="dimgrey" title="Logout" onPress={() => props.onLogout()}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    paddingBottom: 15,
  },
  filler: {
    height: '7%'
  }
})

export default TopBarHome

