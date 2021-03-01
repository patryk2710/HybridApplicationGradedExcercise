  
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import UserAdListAd from './UserAdListAd';

const UserAdListAds = (props) => {
  return (
    <View style={ [styles.container, props.style] }>
      { props.ads.map(s => <UserAdListAd key={s.id} jwt={props.jwt} onPressDelete={ props.onPressDelete} navigation={ props.navigation} onPressEdit={props.onPressEdit} link={props.link} id={s.id} title={s.title} seller={s.username} desc={s.description} price={s.askingPrice} image= {s.images}></UserAdListAd>) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default UserAdListAds