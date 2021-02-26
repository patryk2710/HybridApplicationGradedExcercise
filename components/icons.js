import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const Icons = (props) => {
  return (
    <View style={ styles.container }>
      <MaterialIcons name={ props.iconName } color={ props.active ? 'white' : 'gray'} size={30}></MaterialIcons>
      <Text style={ [styles.text, (props.active ? styles.activeText : styles.inactiveText)] }>{ props.name }</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    flex: 1
  },
  text: {
    fontSize: 12
  },
  activeText: {
    color: 'white'
  },
  inactiveText: {
    color: 'gray'
  }
})


export default Icons
