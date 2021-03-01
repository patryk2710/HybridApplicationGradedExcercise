import React, { Component, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import UserAdList from './UserAdList'
import { createStackNavigator } from '@react-navigation/stack'
import { useLinkProps } from '@react-navigation/native'


const PostsView = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(props.uri + '/postings/' + props.name)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function refreshClick() {
    fetch(props.uri + '/postings/' + props.name)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

    return (
      <>
      <View style={{flex:1, flexDirection: 'column', height: '100%'}}>
      <ScrollView>
        <View style={styles.backgroundTop}>
          <View style={styles.topBar}>
            <Text style={styles.test}>Postings</Text>
            <Button color="dimgrey" title="Make Posting" onPress={() => props.navigation.navigate('makePost')}></Button>
            <View style={{width: '2%'}}/>
            <Button color="dimgrey" title="Refresh" onPress={() => refreshClick()}></Button>
          </View>
        </View>
        <View style={styles.backgroundBottom}>
          <UserAdList
            ads = { data } uri= {props.uri} jwt= {props.jwt} onPressDelete= {props.onPressDelete} onPressEdit={ props.onPressEdit } navigation={props.navigation} >
          </UserAdList>
        </View>
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
    paddingRight: 40,
    paddingTop: 30
  },
  backgroundTop: {
    flex: 1, 
    backgroundColor: 'grey', 
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 18
  },
  backgroundBottom: {
    flex:3, 
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  },
  topBar: {
    flex: 1, 
    backgroundColor: 'grey', 
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 10
  },

})

export default PostsView