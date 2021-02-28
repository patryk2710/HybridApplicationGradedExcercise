import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/main';

export default function App() {
  let output;

  output = <Main apiURI='https://webinterfaces-api-patrykr.herokuapp.com'></Main>

  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18
  },
});
