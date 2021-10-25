import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import {Image} from 'react-native';
// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from '.././components/styles';
import { View, ActivityIndicator } from 'react-native';

//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons, FontAwesome } from '@expo/vector-icons';

// keyboard avoiding view
import KeyboardAvoidingWrapper from '.././components/KeyboardAvoidingWrapper';

// api client
import axios from 'axios';



// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// // credentials context
import { CredentialsContext } from '.././components/CredentialsContext';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  //messageType = successmsg /errormsg
 

  
  // credentials context
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'http://3.108.105.101:8080/api-docs/#/Authentication/post_auth_validation';
    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;

        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          Login({ ...data[0] }, message, status);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        handleMessage('An error occurred. Check your network and try again');
        console.log(error.toJSON());
  
      });
  };

  // const App = () => {
  //   const getDataUsingSimpleGetCall = () => {
  //     axios
  //       .get('http://3.108.105.101:8080/api-docs/#/Authentication/post_auth_validation')
  //       .then(function (response) {
  //         // handle success
  //         alert(JSON.stringify(response.data));
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         alert(error.message);
  //       })
        
  //   };
  
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'http://3.108.105.101:8080/api-docs/#/Authentication/post_auth_validation',
  //       );
  //       alert(JSON.stringify(response.data));
  //     } catch (error) {
  //       // handle error
  //       alert(error.message);
  //     }
  //   };

  //   const postData = () => {
  //     axios
  //       .post('http://3.108.105.101:8080/api-docs/#/Authentication/post_auth_validation', {
  //         Tenant : 'tenant1',
  //         username : 'user',
  //         password : 'user'
  //       })
  //       .then(function (response) {
  //         // handle success
  //         alert(JSON.stringify(response.data));
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         alert(error.message);
  //       });
  //   };
  

  //if no msgtype provided the type field chai be set with the default value (for eg :FAILED)
    const handleMessage = (message, type = '') => {
      setMessage(message);
      setMessageType(type);
      
    };
  

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          {/* <PageLogo resizeMode="cover" source={require('.././assets/wave.JPG')} /> */}
      
          <SubTitle>Account Login</SubTitle>

          <Formik
            initialValues={{ Tenant:'' , username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.Tenant == '' || values.username == '' || values.password == '') {
                handleMessage('Please fill in all fields');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>


                <MyTextInput
                  label="Tenant"
                  placeholder="tenant"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('Tenant')}
                  onBlur={handleBlur('Tenant')}
                  value={values.Tenant}
                  keyboardType="Tenant"
                 
                />
                <MyTextInput
                  label="Username"
                  placeholder="user"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('user')}
                  onBlur={handleBlur('user')}
                  value={values.user}
                  keyboardType="Username"
                  icon="person"
                />

                <MyTextInput
                  label="Password"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>
                {/* output of the msgType and message */}

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <Line />
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

<View style={{flex:4, width:300}}>

<Image source={require('.././assets/footer.JPG')} style={{height: '100%',width: 500 , margin : 0,  resizeMode: 'contain' }}>
    </Image>
    </View>

export default Login;