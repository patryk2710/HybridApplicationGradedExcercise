import React, { Component, useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import moment from 'moment'

const EditPost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [askingPrice, setAskingPrice] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  function onSubmitPosting() {

    let edit = {}
    if(title != "") {
      edit["title"] = title
    }
    if(description != "") {
      edit["description"] = description
    }
    if(location != "") {
      edit["location"] = location
    }
    if(askingPrice != "") {
      edit["askingPrice"] = askingPrice
    }
    if(category != "") {
      edit["category"] = category
    }
    if(deliveryType != "") {
      edit["deliveryType"] = deliveryType
    }
    if(contactInfo != "") {
      edit["contactInfo"] = contactInfo
    }
    console.log(edit)

    id = props.getId()
    console.log(props.apiURI + '/users/' + props.name + '/postings/' + id)
    fetch(props.apiURI + '/users/' + props.name + '/postings/' + id, {
      method: 'PUT',
      headers: {
        "Authorization": "Bearer " + props.jwt,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(edit)
    })
    .then(response => {
      if (response.ok == false) {
        throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
      }
      alert('Put SuccessFul');
    })
    } 
  
    return (
      <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 50, paddingLeft: 20}}>
      <ScrollView>
        <Text style={ styles.header }>Enter any of the following fields to edit the min you posting</Text>
        <Text>Please enter your posting title</Text>
        <TextInput
          style={ styles.input }
          value={ title }
          placeholder="Nice bike"
          onChangeText={ value => setTitle(value)}
        />
        <Text>Please enter your posting description</Text>
        <TextInput
          style={ styles.input }
          value={ description }
          placeholder="Good for biking"
          onChangeText={ value => setDescription(value)}
        />
        <Text>Please enter your posting category</Text>
        <TextInput
          style={ styles.input }
          value={ category }
          placeholder="Bicycles"
          onChangeText={ value => setCategory(value)}
        />
        <Text>Please enter your location</Text>
        <TextInput
          style={ styles.input }
          value={ location }
          placeholder="Helsinki, FI"
          onChangeText={ value => setLocation(value)}
        />
        <Text>Please enter your posting asking price</Text>
        <TextInput
          style={ styles.input }
          value={ askingPrice }
          placeholder="246"
          onChangeText={ value => setAskingPrice(value)}
        />
        <Text>Please enter your delivery type</Text>
        <TextInput
          style={ styles.input }
          value={ deliveryType }
          placeholder="pickup"
          onChangeText={ value => setDeliveryType(value)}
        />
        <Text>Please enter your contact information</Text>
        <TextInput
          style={ styles.input }
          value={ contactInfo }
          placeholder="test@email.com"
          onChangeText={ value => setContactInfo(value)}
        />
        <TouchableHighlight onPress={ () => onSubmitPosting() }>
        <View style={ styles.primaryButton }>
          <Text style={ styles.primaryButtonText }>Edit your Posting!</Text>
        </View>
        </TouchableHighlight>
      </ScrollView>
      </View>
      </>
    )
  }

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black',
    paddingRight: 15
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

export default EditPost