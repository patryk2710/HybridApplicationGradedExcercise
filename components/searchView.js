import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TopBarSearch from './topBarSearch'
import AdList from './AdList'
import { ScrollView } from 'react-native-gesture-handler'

const searchView = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  console.log(data);

  state = { message: "" }

  callbackFunctionCategory = (childData) => {
    console.log(childData)
    searchbyCategory(childData)
  }

  callbackFunctionLocation = (childData) => {
    console.log(childData)
    searchbyLocation(childData)
  }

  callbackFunctionDate = (childData) => {
    console.log(childData)
    searchbyDate(childData)
  }

  function searchbyCategory(category) {
    fetch('https://webinterfaces-api-patrykr.herokuapp.com/postings/search' + '?category=' + category)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function searchbyDate(date) {
    fetch('https://webinterfaces-api-patrykr.herokuapp.com/postings/search' + '?date=' + date)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  function searchbyLocation(location) {
    fetch('https://webinterfaces-api-patrykr.herokuapp.com/postings/search' + '?location=' + location)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <ScrollView>
        <View style={styles.backgroundTop}>
          <TopBarSearch style={{flex: 1}} functionCategory={callbackFunctionCategory} functionDate={callbackFunctionDate} functionLocation ={callbackFunctionLocation} ></TopBarSearch>
        </View>
          <AdList
            ads = { data }>
          </AdList>
      </ScrollView>
    </View>
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
    justifyContent: 'center',
  },
  backgroundBottom: {
    flex:3, 
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  }
})

export default searchView
