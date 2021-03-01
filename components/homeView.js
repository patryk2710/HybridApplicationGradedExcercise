import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import TopBarHome from './topBarHome'
import AdList from './AdList'

const homeView = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://webinterfaces-api-patrykr.herokuapp.com/postings/search')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <View style={{flex: 1}}>
    <ScrollView>
      <View style={styles.backgroundTop}>
        <TopBarHome {...props} style={{flex: 1}}></TopBarHome>
      </View>
      <AdList
        ads = { data }>
      </AdList>
    </ScrollView> 
    </View>
    </>
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
})

export default homeView