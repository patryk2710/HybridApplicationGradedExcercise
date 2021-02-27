import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import AdListAds from './AdListAds';




const AdList = (props) => {
  return (


    <View style={ styles.main }>
      <AdListAds ads={ props.ads } style={ styles.playlistSongs }></AdListAds>
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
    paddingLeft: 10

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

export default AdList

