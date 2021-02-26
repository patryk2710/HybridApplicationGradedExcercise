import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/main';

export default function App() {
  let output;

  output = <Main></Main>

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
