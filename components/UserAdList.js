import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import UserAdListAds from './UserAdListAds';

const UserAdList = (props) => {
  //console.log(props.jwt)
  return (
    <View style={ styles.main }>
      <UserAdListAds ads={ props.ads } link={ props.uri} onPressDelete={ props.onPressDelete} navigation={ props.navigation} onPressEdit={props.onPressEdit} jwt={ props.jwt} style={ styles.playlistSongs }></UserAdListAds>
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
  coverImage: {
    width: 150,
    height: 150,
    marginTop: 5
  },
  radioName: {
    fontWeight: '700',
    fontSize: 25,
    padding: 15
  },
  muted: {
    color: 'rgb(180,180,180)',
    marginBottom: 5,
    marginTop: 5

  },
  textColor: {
    color: 'white'
  },
  stationContentHeader: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 20
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playlistSongs: {
    marginTop: 25
  }
})

export default UserAdList