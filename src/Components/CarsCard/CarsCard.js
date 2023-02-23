import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {blue} from '../../Colors/Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const CarsCard = ({
  carMake,
  carModel,
  carModelYear,
  carColor,
  carPrice,
  onPressDelete,
  onPressUpdate,
  carRegNo,
}) => {
  return (
    <View style={styles.mainHeader}>
      <View
        style={{
          padding: '2%',
        }}>
        <Text style={styles.carDescription}>Make: {carMake}</Text>
        <Text style={styles.carDescription}>Model: {carModel}</Text>
        <Text style={styles.carDescription}>Year: {carModelYear}</Text>
        <Text style={styles.carDescription}>Color: {carColor}</Text>
        <Text style={styles.carDescription}>Price: {carPrice}</Text>
        <Text style={styles.carDescription}>Reg No: {carRegNo}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttons} onPress={onPressDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressUpdate}
          style={[styles.buttons, {backgroundColor: blue}]}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarsCard;
const styles = StyleSheet.create({
  carDescription: {
    color: blue,
    fontSize: 16,
  },
  mainHeader: {
    width: width / 1.2,
    height: height / 5,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  buttons: {
    alignSelf: 'flex-end',
    margin: '2%',
    backgroundColor: 'darkred',
    borderRadius: 15,
    padding: '2%',
    width: width / 3.5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
