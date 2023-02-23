import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import CarsCard from '../../Components/CarsCard/CarsCard';
import {deleteACar, getCars, getFilterData} from '../../Helpers/Api';
import CustomButton from '../../Components/Button/CustomButton';
import {blue} from '../../Colors/Colors';
import CustomTextInput from '../../Components/TextInput/TextInput';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AuthCheck} from '../../Reducers/AuthCheckFunc';
const Home = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [carData, setCarData] = useState([]);
  const [modelVisible, setModelVisible] = useState(false);
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [placeHolder, setPlaceHolder] = useState('');
  const [textInputValue, setTextInputValue] = useState('');
  //making model visible and getting the category with specific data
  const handleSelect = data => {
    setTextInputVisible(true);
    setPlaceHolder(data);
  };
  const handleSumbit = () => {
    getFilterData(placeHolder.toLowerCase(), textInputValue).then(data => {
      setCarData(data);
    });
    setModelVisible(false);
    setTextInputVisible(false);
  };
  const handleDelete = id => {
    deleteACar(id).then(data => {
      getCars().then(data => {
        //we have too much thats why limit it to 20 cars with splice
        console.log('data', data);

        setCarData(data);
      });
    });
  };
  const handleLogout = () => {
    dispatch(AuthCheck(false));
  };
  const getAllCarsData = () => {
    //getting data of cars by making a car
    getCars().then(data => {
      //we have too much thats why limit it to 20 cars with splice
      console.log('data', data);

      setCarData(data);
    });
  };
  useEffect(() => {
    getAllCarsData();
  }, [isFocused]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginTop: '5%',
        alignItems: 'center',
      }}>
      {modelVisible ? null : (
        <CustomButton name={'Filter'} onPress={() => setModelVisible(true)} />
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => getAllCarsData()}>
          <Text
            style={{
              color: 'white',
            }}>
            Show All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handleLogout()}>
          <Text
            style={{
              color: 'white',
            }}>
            Log out
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate('Create')}>
          <Text
            style={{
              color: 'white',
            }}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modelVisible} transparent={true}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => setModelVisible(false)}>
            <Text
              style={{
                color: 'red',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <View style={{backgroundColor: '#fff', padding: 20, width: '80%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity onPress={() => handleSelect('Make')}>
                <Text>Make</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelect('Model')}>
                <Text>Model</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelect('Color')}>
                <Text>Color</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSelect('Year')}>
                <Text>Year</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={textInputVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              borderWidth: 1,
              alignItems: 'center',
              width: '80%',
              borderColor: blue,
              borderRadius: 20,
            }}>
            <TouchableOpacity onPress={() => setTextInputVisible(false)}>
              <Text
                style={{
                  color: 'red',
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <CustomTextInput
              onChangeText={text => setTextInputValue(text)}
              placeholder={placeHolder}
            />
            <CustomButton onPress={() => handleSumbit()} name={'SUBMIT'} />
          </View>
        </View>
      </Modal>

      <ScrollView
        style={{
          flexGrow: 1,
        }}
        contentContainerStyle={{
          width: '80%',
        }}>
        {carData?.map((data, id) => {
          return (
            <CarsCard
              key={id}
              carMake={data.make}
              carModel={data.model}
              carColor={data.color}
              carModelYear={data.year}
              carPrice={data.price}
              carRegNo={data.registrationNo}
              onPressDelete={() => handleDelete(data.id)}
              onPressUpdate={() =>
                navigation.navigate('Update', {
                  state: data,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  buttons: {
    width: 100,
    height: 50,
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    margin: '2%',
    backgroundColor: blue,
  },
});
