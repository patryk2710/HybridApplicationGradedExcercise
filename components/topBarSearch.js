import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchPicker from './searchPicker'

const TopBarSearch = () => {
  return (
    <View style={{flex:1, flexDirection: 'row'}}>
      <View style={{flex:2, paddingLeft: 10, justifyContent: 'center'}}>
        <Text style={styles.search}>Search by:</Text>
      </View>
      <View style={{flex:4, justifyContent: 'center'}}>
        <SearchPicker style={{flex: 1}}></SearchPicker>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'lightgrey',
  },
})

export default TopBarSearch