import React, { Component } from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import Background from './background'
import BottomMenu from './bottomMenu'

export default class Main extends Component {
  render() {
    return (
      <View>
        <Background>
        </Background>
        <BottomMenu></BottomMenu>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})