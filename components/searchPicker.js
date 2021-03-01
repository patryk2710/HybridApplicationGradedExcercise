import React, { useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Dialog from 'react-native-dialog'


const SearchPicker = (props) => {
  const [visibleCategory, setVisible] = useState(false)
  const [visibleLocation, setVisibleLocation] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  sendData = () => {
    props.functionLocation("Whoopdy dingaling")
    props.functionDate("2010-10-17")
    props.functionCategory("Bicycle")
  }

  let value;

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  } 

  const onChange = (event, selectedDate) => {
    let currentDate = selectedDate || date;
    let dateStr = String(currentDate)
    dateStr = formatDate(dateStr)

    if(event.type == 'set') {
      addValue(dateStr)
      handleSubmitDate(dateStr)
    } else {
      console.log('cancelled')
    }
    setShow(false)
  };

  const showDialog = () => {
    setVisible(true);
  }

  const showDialogLocation = () => {
    setVisibleLocation(true);
  }

  const handleCancel = () => {
    setVisible(false);
    setVisibleLocation(false);
  };

  const addValue = (valuepassed) => {
    value = valuepassed
  }

  const handleSubmit = () => {
    console.log(value)
    setVisible(false)
    setVisibleLocation(false)
  };

  const handleSubmitCategory = () => {
    console.log(value)
    setVisible(false)
    setVisibleLocation(false)
    props.functionCategory(value)
  };

  const handleSubmitLocation = () => {
    console.log(value)
    setVisible(false)
    setVisibleLocation(false)
    props.functionLocation(value)
  };

  const handleSubmitDate = () => {
    console.log(value + ' is date value')
    setVisible(false)
    setVisibleLocation(false)
    props.functionDate(value)
  };

  const showDatepicker = () => {
    setShow(true);
  };

  
  return (
    <View style={styles.radio}>
      <Button color="dimgrey" title="Category" onPress={showDialog}></Button>
      <View style={styles.filler}></View>
      <Button color="dimgrey" title="Location" onPress={showDialogLocation}></Button>
      <View style={styles.filler}></View>
      <Button color="dimgrey" title="Date" onPress={showDatepicker}></Button>
      
      <Dialog.Container visible={visibleCategory}>
        <Dialog.Title>Enter Category</Dialog.Title>
        <Dialog.Description>Please enter the category to search for</Dialog.Description>
        <Dialog.Input underlineColorAndroid="darkgrey" placeholder="Furniture" onChangeText={(category) => addValue(category)}/>
        <Dialog.Button label="Cancel" onPress={handleCancel}/>
        <Dialog.Button label="Search" onPress={handleSubmitCategory} />
      </Dialog.Container>

      <Dialog.Container visible={visibleLocation}>
        <Dialog.Title>Enter Location</Dialog.Title>
        <Dialog.Description>Please enter the location to search for</Dialog.Description>
        <Dialog.Input underlineColorAndroid="darkgrey" placeholder="Oulu, FI" onChangeText={(location) => addValue(location)}/>
        <Dialog.Button label="Cancel" onPress={handleCancel}/>
        <Dialog.Button label="Search" onPress={handleSubmitLocation} />
      </Dialog.Container>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'column',
    justifyContent: 'center', 
    padding: 30, 
    paddingTop:45,
    flex: 1,
  },
  filler: {
    height: '7%'
  }
})

export default SearchPicker