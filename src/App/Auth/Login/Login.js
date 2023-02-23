import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../Components/TextInput/TextInput';
import {blue} from '../../../Colors/Colors';
import CustomButton from '../../../Components/Button/CustomButton';
import {loginUser, registerUser} from '../../../Helpers/Api';
import axios from 'axios';
import {baseUrl} from '../../../Helpers/Config';
import {useDispatch} from 'react-redux';
import {AuthCheck} from '../../../Reducers/AuthCheckFunc';

const Login = ({navigation}) => {
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
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    if (validateEmail(email) && validatePassword(password)) {
      const body = {
        email: email,
        password: password,
      };
      loginUser(body).then(user => {
        if (user.status === 201) {
          dispatch(AuthCheck(true));
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
        Sign In
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
      <CustomButton onPress={() => handleSubmit()} name={'Login'} />
      <CustomButton
        onPress={() => navigation.navigate('SignUp')}
        name={'Sign Up'}
      />
    </View>
  );
};

export default Login;
