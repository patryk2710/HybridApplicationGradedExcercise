import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import UserAdListAds from './UserAdListAds';

const UserAdList = (props) => {
  return (
    <View style={ styles.main }>
      <UserAdListAds ads={ props.ads } link={ props.uri} onPressDelete={ props.onPressDelete} navigation={ props.navigation} onPressEdit={props.onPressEdit} jwt={ props.jwt} style={ styles.postings }></UserAdListAds>
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
  postings: {
    marginTop: 25
  }
})

export default UserAdList