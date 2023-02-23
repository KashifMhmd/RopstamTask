import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {blue} from '../../Colors/Colors';

const CustomButton = ({name, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '75%',
        height: 55,
        borderRadius: 15,
        backgroundColor: blue,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%',
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
