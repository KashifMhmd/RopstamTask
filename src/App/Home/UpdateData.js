import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../Components/TextInput/TextInput';
import CustomButton from '../../Components/Button/CustomButton';
import {blue} from '../../Colors/Colors';
import {updateCarData} from '../../Helpers/Api';

const UpdateData = ({route, navigation}) => {
  const {state} = route.params;
  const [make, setMake] = useState(state.make);
  const [model, setModel] = useState(state.model);
  const [color, setColor] = useState(state.color);
  const [regNo, setRegNo] = useState(state.registrationNo);
  const [year, setYear] = useState(state.year);
  const [price, setPrice] = useState(state.price);
  const [makeError, setMakeError] = useState('');
  const [modelError, setModelError] = useState('');
  const [colorError, setColorError] = useState('');
  const [yearError, setYearError] = useState('');
  const [regNoError, setRegNoError] = useState('');
  const [priceError, setPriceError] = useState('');
  const handleUpdate = () => {
    if (!make) {
      setMakeError('Make is required');
      return;
    } else {
      setMakeError('');
    }

    if (!model) {
      setModelError('Model is required');
      return;
    } else {
      setModelError('');
    }

    if (!color) {
      setColorError('Color is required');
      return;
    } else {
      setColorError('');
    }

    if (!year) {
      setYearError('Year is required');
      return;
    } else {
      setYearError('');
    }
    if (!regNo) {
      setRegNoError('Registration number is required');
      return;
    } else {
      setRegNoError('');
    }

    if (!price) {
      setPriceError('Price is required');
      return;
    } else {
      setPriceError('');
    }
    const body = {
      id: state.id,
      make: make,
      model: model,
      color: color,
      year: year,
      registrationNo: regNo,
      price: price,
    };

    updateCarData(state.id, body).then(res => {
      navigation.goBack();
    });
  };
  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        marginTop: '5%',
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: blue,
        }}>
        Update data of the car
      </Text>
      <Text style={{color: 'red'}}>{makeError}</Text>

      <CustomTextInput
        value={make}
        onChangeText={text => setMake(text)}
        placeholder={'Make'}
      />
      <Text style={{color: 'red'}}>{modelError}</Text>

      <CustomTextInput
        value={model}
        onChangeText={text => setModel(text)}
        placeholder={'Model'}
      />
      <Text style={{color: 'red'}}>{colorError}</Text>

      <CustomTextInput
        value={color}
        onChangeText={text => setColor(text)}
        placeholder={'Color'}
      />
      <Text style={{color: 'red'}}>{regNoError}</Text>

      <CustomTextInput
        value={regNo}
        onChangeText={text => setRegNo(text)}
        placeholder={'Reg#'}
      />
      <Text style={{color: 'red'}}>{yearError}</Text>

      <CustomTextInput
        value={year}
        onChangeText={text => setYear(text)}
        placeholder={'Year'}
      />
      <Text style={{color: 'red'}}>{priceError}</Text>

      <CustomTextInput
        value={price}
        onChangeText={text => setPrice(text)}
        placeholder={'Price'}
      />
      <CustomButton onPress={() => handleUpdate()} name={'Submit'} />
    </ScrollView>
  );
};

export default UpdateData;
