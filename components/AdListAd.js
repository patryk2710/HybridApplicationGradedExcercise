import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AdListAd = (props) => {
  return (
    <View style={ styles.container }>
      <Image style={ styles.sellerImage } source={{ uri: props.image.toString() }}></Image>
      <View style={ styles.songArtistName }>
        <Text style={ styles.Title}>{ props.title}</Text>
        <Text style={ styles.description}>{ props.desc}</Text>
        <Text style={ styles.sellerName}>Sold by: { props.seller}</Text>
      </View>
      <MaterialCommunityIcons name='dots-horizontal' color='white' size={25} color="gray"></MaterialCommunityIcons>
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
  songArtistName: {
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

export default AdListAd