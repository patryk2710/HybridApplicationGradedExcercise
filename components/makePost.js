import React, { Component, useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import moment from 'moment'

var postForm = new FormData()

export default class MakePost extends Component {

  constructor(props) {

    super(props);
    this.state = {
      title: null,
      description: null,
      category: null,
      location: null,
      askingPrice: null,
      dateofPosting: null,
      deliveryType: null,
      contactInfo: null,
      fileName: null,
      api: null,
      type: null
    }
  }

  componentDidMount() {
    console.log('testing componentmount')
    console.log(this.props.apiURI + '/users/' + this.props.name + '/postings' )
    console.log(this.props.jwt)
    //postForm = new FormData()
  }

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true
    });
    console.log(pickerResult);

    
    if(pickerResult.cancelled == true)
    {
      alert('Image picker cancelled or failed');
      return;
    }

    
    const fileNameSplit = pickerResult.uri.split('/');
    const fileName = fileNameSplit[fileNameSplit.length - 1];
    
    // this.setState({uri: pickerResult.uri})
    // this.setState({fileName: fileName})
    // this.setState({type: pickerResult.type})
    postForm.append('images', {
      uri: pickerResult.uri,
      name: fileName,
      type: 'image/jpeg'
    });
  }

  onSubmitPosting = () => {
    console.log(this.state.title)
    console.log(this.state.description)
    console.log(this.state.category)
    console.log(this.state.location)
    console.log(this.state.askingPrice)
    console.log(this.state.deliveryType)
    console.log(this.state.contactInfo)
    let time = String(moment().format('YYYY-MM-DD'))

    postForm.append('title', this.state.title)
    postForm.append('description', this.state.description)
    postForm.append('location', this.state.location)
    postForm.append('askingPrice', this.state.askingPrice)
    postForm.append('category', this.state.category)
    postForm.append('dateofPosting', time)
    postForm.append('deliveryType', this.state.deliveryType)
    postForm.append('contactInfo', this.state.contactInfo)
    //postForm.append('username', this.props.name)
    console.log(postForm)

    // axios({
    //   method: 'post',
    //   url: this.props.apiURI + '/users/' + this.props.name + '/postings',
    //   data: postForm,
    //   headers: { 'Content-Type': 'multipart/form-data', "Authorization": "Bearer " + this.props.jwt}
    //   })
    //   .then(function (response) {
    //       //handle success
    //       console.log(response);
    //   })
    //   .catch(function (response) {
    //       //handle error
    //       console.log(response);
    //   });

    fetch(this.props.apiURI + '/users/' + this.props.name + '/postings', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + this.props.jwt,
        "Content-Type": 'multipart/form-data'
      },
      body: postForm
    })
    .then(response => {
      if (response.ok == false) {
        let postFormFresh = new FormData()
        postForm = postFormFresh
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      return response.json();
    })
    .then(json => {
      console.log("posting POST successful")
      console.log("Received following JSON");
      console.log(json)
      let postFormFresh = new FormData()
      postForm = postFormFresh

      alert('Post SuccessFul');
    })
    } 
  
  render() {
    return (
      <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 50, paddingLeft: 20}}>
      <ScrollView>
        <Text style={ styles.header }>Enter the folling information to make a posting</Text>
        <Text>Please enter your posting title</Text>
        <TextInput
          style={ styles.input }
          value={ this.title }
          placeholder="Nice bike"
          onChangeText={ value => this.setState({title: value})}
        />
        <Text>Please enter your posting description</Text>
        <TextInput
          style={ styles.input }
          value={ this.description }
          placeholder="Good for biking"
          onChangeText={ value => this.setState({description: value})}
        />
        <Text>Please enter your posting category</Text>
        <TextInput
          style={ styles.input }
          value={ this.category }
          placeholder="Bicycles"
          onChangeText={ value => this.setState({category: value})}
        />
        <Text>Please enter your location</Text>
        <TextInput
          style={ styles.input }
          value={ this.location }
          placeholder="Helsinki, FI"
          onChangeText={ value => this.setState({location: value})}
        />
        <Text>Please enter your posting asking price</Text>
        <TextInput
          style={ styles.input }
          value={ this.askingPrice }
          placeholder="246"
          onChangeText={ value => this.setState({askingPrice: value})}
        />
        <Text>Please enter your delivery type</Text>
        <TextInput
          style={ styles.input }
          value={ this.deliveryType }
          placeholder="pickup"
          onChangeText={ value => this.setState({deliveryType: value})}
        />
        <Text>Please enter your contact information</Text>
        <TextInput
          style={ styles.input }
          value={ this.contactInfo }
          placeholder="test@email.com"
          onChangeText={ value => this.setState({contactInfo: value})}
        />
        <TouchableOpacity onPress={this.openImagePickerAsync} style={{ borderWidth: 1, borderColor: 'black'}}>
          <Text>Pick a photo</Text>
        </TouchableOpacity>

        <TouchableHighlight onPress={ () => this.onSubmitPosting() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Make Posting!</Text>
        </View>
        </TouchableHighlight>
      </ScrollView>
      </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black'
  },
  text: {
    fontSize: 15,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    height: 25,
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