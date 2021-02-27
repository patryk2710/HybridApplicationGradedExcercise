import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import TopBarHome from './topBarHome'
import AdList from './AdList'
import axios from 'axios'
import adImage from '../assets/eMeme.jpg'

//const allAds = axios.get('https://webinterfaces-api-patrykr.herokuapp.com/postings/search')
//console.log(allAds)
const allAds = [
  {
    id: 1,
    title: "Valittu Kansa",
    username: "Antti Tuisku",
    images: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
  },
  {
    id: 2,
    title: "Noise",
    username: "Nightwish",
    images: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
  },
  {
    id: 3,
    title: "Intentions",
    username: "Justin Bieber",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 4,
    title: "Majakka",
    username: "Juno",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 21,
    title: "Valittu Kansa",
    username: "Antti Tuisku",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 22,
    title: "Noise",
    username: "Nightwish",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 23,
    title: "Intentions",
    username: "Justin Bieber",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 24,
    title: "Majakka",
    username: "Juno",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 31,
    title: "Valittu Kansa",
    username: "Antti Tuisku",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 32,
    title: "Noise",
    username: "Nightwish",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 33,
    title: "Intentions",
    username: "Justin Bieber",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
  {
    id: 34,
    title: "Majakka",
    username: "Juno",
    images: "https://i.kym-cdn.com/photos/images/newsfeed/001/365/818/183.jpg"
  },
];

let apiAds = {}

const request = new XMLHttpRequest()
request.open('get', 'https://webinterfaces-api-patrykr.herokuapp.com/postings/search')
request.send()
request.onload = () => {

  if (request.status === 200){

    apiAds = JSON.parse( request.response)
  } else {

    console.log('error')
  }
}

console.log(apiAds)
console.log(allAds)

const homeView = () => {
  return (
    //<View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <ScrollView>
        <View style={styles.backgroundTop}>
          <TopBarHome style={{flex: 1}}></TopBarHome>
        </View>
        <AdList
          ads = { apiAds }>
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