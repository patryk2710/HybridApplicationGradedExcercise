import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const NameDisplay = () => {
  return (
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', paddingTop: 30, paddingLeft: 10}}>
      <Text style={styles.name}>Users user name</Text>
      <Text style={styles.name}>Users Full name</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    paddingTop: 20,
  }
})

export default NameDisplay