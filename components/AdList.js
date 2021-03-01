import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import AdListAds from './AdListAds';

const AdList = (props) => {
  return (
    <View style={ styles.main }>
      <AdListAds ads={ props.ads } style={ styles.postingList }></AdListAds>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 50
  },
  postingList: {
    marginTop: 25
  }
})

export default AdList