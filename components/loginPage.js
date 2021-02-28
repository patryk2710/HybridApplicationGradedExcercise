import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet} from 'react-native'
import { Base64 } from 'js-base64'

const LoginPage = (props) => {
  const [userName, setUserName] = useState("tester");
  const [password, setPassword] = useState("testerpassword");

  function loginClick() {
    fetch(props.apiURI + '/users/login', {
      method: 'GET',
      headers: {
        "Authorization": "Basic " + Base64.encode(userName + ":" + password)
      }
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("Login successful")
      console.log("Received following JSON");
      console.log(json);
      console.log(json.username)

      props.onLoginReceiveJWT(json.token, json.username);
    })
    .catch(error => {
      console.log("Error message:")
      console.log(error.message)
    });
  }



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey'}}>
        <Text style={ styles.header }>User Login</Text>
        <Text style={ styles.text }>Username</Text>
        <TextInput
          style={ styles.input }
          value={ userName }
          placeholder="johndoe"
          onChangeText={ value => setUserName(value)}
        />
        <Text style={ styles.text }>Password</Text>
        <TextInput
          style={ styles.input }
          value={ password }
          placeholder="password"
          onChangeText={ value => setPassword(value)}
        />
        <TouchableHighlight onPress={ () => loginClick() }>
          <View style={ styles.primaryButton }>
            <Text style={ styles.primaryButtonText }>Login</Text>
          </View>
        </TouchableHighlight>
        <Button title="Sign up" color="dimgrey" onPress={ () => props.navigation.navigate('Signup') } />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    marginBottom: 20,
    color: 'black'
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20
  },
  primaryButton: {
    backgroundColor: 'rgb(0, 153, 51)',
    height: 60,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 20

  }
});

export default LoginPage
