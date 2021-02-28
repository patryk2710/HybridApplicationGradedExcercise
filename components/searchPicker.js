import React, { useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Dialog from 'react-native-dialog'


const SearchPicker = () => {
  const [visibleCategory, setVisible] = useState(false)
  const [visibleLocation, setVisibleLocation] = useState(false)
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  let value;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if(event.type == 'set') {
      console.log(currentDate)
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
        <Dialog.Button label="Search" onPress={handleSubmit} />
      </Dialog.Container>

      <Dialog.Container visible={visibleLocation}>
        <Dialog.Title>Enter Location</Dialog.Title>
        <Dialog.Description>Please enter the location to search for</Dialog.Description>
        <Dialog.Input underlineColorAndroid="darkgrey" placeholder="Oulu, FI" onChangeText={(location) => addValue(location)}/>
        <Dialog.Button label="Cancel" onPress={handleCancel}/>
        <Dialog.Button label="Search" onPress={handleSubmit} />
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

{/* <DialogInput isDialogVisible={categoryVisible}
      title={"test input"}
      message={"testingthis"}
      hintInput={"Paintings"}
      submitInput={ (inputText) => { console.log(inputText)}}
      closeDialog={ () => Alert.alert('Cancelled')}>
      </DialogInput> */}

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