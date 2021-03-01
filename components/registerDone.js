import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const RegisterDone = (props) => {
  return (
    <View style={ styles.screen }>
      <Text style={ styles.header }>Sign up completed</Text>
      <Button color="dimgrey" title="Proceed to login" onPress={ () => props.navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'lightgrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    marginBottom: 20,
    color: 'black'
  },
  text: {
    fontSize: 20,
    color: 'dimgrey'
  }
});


export default RegisterDone
