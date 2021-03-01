import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MakePost from './makePost'
import PostsView from './postsView'
import EditPost from './editPost'
import PostSuccess from './postSuccess'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'

const Stack = createStackNavigator();

const PostsViewNav = (props) => {

  const [id, setId] = useState("");

  function onPressDelete(id)  {
    // console.log(id)
    console.log(props.apiURI + '/users/' + props.name + '/postings/' + id)
    // console.log(props.link)
    fetch(props.apiURI + '/users/' + props.name + '/postings/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + props.jwt,}
    })
      .then(response => {
        if (response.ok == false) {
          throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
        }
        return response.status
      })
      .then(json => {
        console.log("deleting SuccessFul")
        alert('Delete Successful');
      })
  }

  function onPressEdit(idpassed) {
    setId(idpassed)
  }

  function getId() {
    return id
  }

  let link = props.apiURI
  //console.log(link)
  //console.log(props.jwt)
  let name = props.name
  let token = props.jwt
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen name="postsView" options={{headerShown: false}}>{ props => <PostsView {...props} onPressEdit={ onPressEdit } onPressDelete={ onPressDelete } name={ name } navigation={props.navigation} uri= { link } jwt= { token} ></PostsView> }</Stack.Screen>
        <Stack.Screen name ="makePost" children={()=><MakePost {...props} />}  options={{ title: 'Make A Posting' }}/>
        <Stack.Screen name="editPost" children={()=><EditPost {...props} navigation={props.navigation} getId={ getId } />}  options={{ title: 'Edit A Posting' }}/>
      </Stack.Navigator>
    </View>
  )
}
//<Stack.Screen name="editPost" children={()=><EditPost {...props} navigation={props.navigation} id={ id } />}  options={{ title: 'Edit A Posting' }}/>
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

export default PostsViewNav
