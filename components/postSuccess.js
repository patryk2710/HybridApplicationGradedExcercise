import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const PostSuccess = (props) => {

  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>Posting Successful</Text>
      <Button title="Go back" onPress={ () => props.navigation.reset({
          index: 0,
          routes: [{ name: 'postsView' }],
        })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'rgb(227, 178, 0)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'white'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});


export default PostSuccess
