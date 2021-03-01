import React, { Component, useState } from 'react'
import fetch from 'node-fetch'
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const UserAdListAd = (props) => {

  function handleDelete(id) {
    props.onPressDelete(id)
  }

  function handleEdit(id) {
    props.onPressEdit(id)
    props.navigation.navigate('editPost')
  }

    return (
      <View style={ styles.container }>
        <Image style={ styles.sellerImage } source={{ uri: props.image.toString() }}></Image>
        <View style={ styles.posting }>
          <Text style={ styles.Title}>{ props.title}</Text>
          <Text style={ styles.description}>{ props.desc}</Text>
          <Text style={ styles.seller}>{ props.price}</Text>
        </View>
        <MaterialIcons name='delete' color='white' size={25} color="crimson" onPress={() => handleDelete(props.id)}></MaterialIcons>
        <View style={{width: '3%'}}></View>
        <MaterialIcons name='edit' color='white' size={25} color="gray" onPress={() => handleEdit(props.id)}></MaterialIcons>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10

  },
  posting: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10

  },
  sellerImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1
  },
  Title: {
    color: 'black',
    fontSize: 16
  },
  description: {
    color: 'gray'
  },
  sellerName: {
    color: 'dimgrey'
  }
})

export default UserAdListAd