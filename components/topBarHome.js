import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LogoMessage from './logoMessage'
import { useNavigation } from '@react-navigation/native'

const TopBarHome = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{flex:1, paddingLeft: 10, justifyContent: 'center'}}>
        <LogoMessage style={{flex: 1}}></LogoMessage>
      </View>
      <View style={{flex:1, justifyContent: 'center'}}>
      <Text style={styles.text}>Username</Text>
        <Button color="dimgrey" title="Logout" onPress={() => navigation.navigate('loginPage')}></Button>
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
  },
  filler: {
    height: '7%'
  }
})

export default TopBarHome

