import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import TopBarHome from './topBarHome'
import AdList from './AdList'
import adImage from '../assets/eMeme.jpg'

const allAds = [
  {
    id: 1,
    title: "Valittu Kansa",
    seller: "Antti Tuisku",
    coverImage: adImage
  },
  {
    id: 2,
    title: "Noise",
    seller: "Nightwish",
    coverImage: adImage
  },
  {
    id: 3,
    title: "Intentions",
    seller: "Justin Bieber",
    coverImage: adImage
  },
  {
    id: 4,
    title: "Majakka",
    seller: "Juno",
    coverImage: adImage
  },
  {
    id: 21,
    title: "Valittu Kansa",
    seller: "Antti Tuisku",
    coverImage: adImage
  },
  {
    id: 22,
    title: "Noise",
    seller: "Nightwish",
    coverImage: adImage
  },
  {
    id: 23,
    title: "Intentions",
    seller: "Justin Bieber",
    coverImage: adImage
  },
  {
    id: 24,
    title: "Majakka",
    seller: "Juno",
    coverImage: adImage
  },
  {
    id: 31,
    title: "Valittu Kansa",
    seller: "Antti Tuisku",
    coverImage: adImage
  },
  {
    id: 32,
    title: "Noise",
    seller: "Nightwish",
    coverImage: adImage
  },
  {
    id: 33,
    title: "Intentions",
    seller: "Justin Bieber",
    coverImage: adImage
  },
  {
    id: 34,
    title: "Majakka",
    seller: "Juno",
    coverImage: adImage
  },
];

const homeView = () => {
  return (
    //<View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <ScrollView>
        <View style={styles.backgroundTop}>
          <TopBarHome style={{flex: 1}}></TopBarHome>
        </View>
        <AdList
          ads = { allAds }>
        </AdList>
      </ScrollView>
    //</View>
  )
}

const styles = StyleSheet.create({
  test: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  backgroundTop: {
    flex: 1, 
    backgroundColor: 'grey',
    justifyContent: 'center' 
  },
  backgroundBottom: {
    flex:3, 
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  }
})

export default homeView