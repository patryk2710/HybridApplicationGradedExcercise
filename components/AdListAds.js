import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AdListAd from './AdListAd';

const AdListAds = (props) => {
  return (
    <View style={ [styles.container, props.style] }>
      { props.ads.map(s => <AdListAd key={s.id} title={s.title} seller={s.username} image= {s.images}></AdListAd>) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default AdListAds
