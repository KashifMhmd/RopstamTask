import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import {blue} from '../../../Colors/Colors';
import CustomButton from '../../../Components/Button/CustomButton';
import {registerUser} from '../../../Helpers/Api';

const SignUp = ({navigation}) => {
  //validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const validateEmail = email => {
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    return passwordRegex.test(password);
  };
  ////////////////////////////////
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    if (validateEmail(email) && validatePassword(password)) {
      const body = {
        email: email,
        password: password,
      };
      registerUser(body).then(user => {
        if (user.status === 201) {
          navigation.navigate('Login');
        }
      });
    } else {
      Alert.alert(
        'Login failed, please checkEmail or password',
        'Password contain at least one lowercase letter, one uppercase letter, one digit, and are at least 8 characters long',
      );
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: blue,
          fontWeight: 'bold',
        }}>
        Sign Up
      </Text>
      <CustomTextInput
        placeholder={'Enter Your email'}
        value={email}
        onChangeText={text => setEmail(text)}
        numberOfLines={1}
      />

      <CustomTextInput
        placeholder={'Enter Password'}
        value={password}
        onChangeText={text => setPassword(text)}
        numberOfLines={1}
      />
      <CustomButton onPress={() => handleSubmit()} name={'Sign Up'} />
      <CustomButton
        onPress={() => navigation.navigate('Login')}
        name={'Login'}
      />
    </View>
  );
};

export default SignUp;
