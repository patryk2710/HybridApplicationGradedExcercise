import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icons from './icons'

const bottomMenu = () => {
  return (
    <View style={ styles.container }>
      <Icons active={true} name="Home" iconName="home"></Icons>
      <Icons active={false} name="Search" iconName="search"></Icons>
      <Icons active={false} name="Your Postings" iconName="list"></Icons>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '10%',
    width: '100%',
    bottom: 0,
    backgroundColor: 'darkgrey',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default bottomMenu
