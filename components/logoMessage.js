import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import logo from '../assets/logo.png'

const logoMessage = () => {
  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', paddingTop: 30, paddingLeft: 10}}>
      <Image source= {logo} style={styles.logo}></Image>
      <Text style={styles.welcome}>Welcome to the shop</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    paddingTop: 20,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain'
  }
})

export default logoMessage