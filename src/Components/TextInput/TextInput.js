import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {blue} from '../../Colors/Colors';

const CustomTextInput = ({placeholder, value, onChangeText, numberOfLines}) => {
  return (
    <View
      style={{
        width: '75%',
        height: 50,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 15,
        margin: '2%',
        borderColor: blue,
      }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default CustomTextInput;
