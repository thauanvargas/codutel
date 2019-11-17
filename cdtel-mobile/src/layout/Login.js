import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Video from 'react-native-video';

import logo from '../assets/logo.png';

export const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const bgVideo = require('../assets/video/loginvideo.mp4');
  let regValues = [
    {
      reg: true,
      val: 'Start Your 1st Journey',
      buttonCss: {
        height: 46,
        alignSelf: 'stretch',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DF4723',
        marginTop: 30,
      },
      buttonTextCss: {
        fontFamily: 'Fira Code, Roboto',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: -0.115,
        padding: 30,
      },
    },
  ];
  const [reg, setReg] = useState(regValues);

  function checkIfUser() {}

  async function handleLogin() {
    if (reg[0].reg) {
      navigation.navigate('Register');
    } else {
      const response = await api.post('/', {
        name: username,
        password: password,
      });
      navigation.navigate('Main');
    }
  }
  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}>
        <Video
          repeat
          source={bgVideo} // Can be a URL or a local file.
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />

        <Image style={styles.logo} source={logo} />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholderTextColor="#999"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          onChangeText={password => {
            setPassword(password);
            if (password === '') {
              let regValues = [
                {
                  reg: true,
                  val: 'Start Your 1st Journey',
                  buttonCss: {
                    height: 46,
                    alignSelf: 'stretch',
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#DF4723',
                    marginTop: 30,
                  },
                  buttonTextCss: {
                    fontFamily: 'Fira Code, Roboto',
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                    letterSpacing: -0.115,
                    padding: 30,
                  },
                },
              ];
              setReg(regValues);
            } else {
              let regValues = [
                {
                  reg: false,
                  val: 'Continue Your Journey',
                  buttonCss: {
                    height: 46,
                    alignSelf: 'stretch',
                    borderRadius: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#c3c3c3',
                    marginTop: 30,
                  },
                  buttonTextCss: {
                    fontFamily: 'Fira Code, Roboto',
                    fontWeight: 'bold',
                    color: '#DF4723',
                    textAlign: 'center',
                    letterSpacing: -0.115,
                    padding: 30,
                  },
                },
              ];
              setReg(regValues);
            }
          }}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={password}
          placeholderTextColor="#999"
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Trouble Sign-in?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={reg[0].buttonCss}>
          <Text style={reg[0].buttonTextCss}>{reg[0].val}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  logo: {
    marginBottom: 40,
  },

  forgotPasswordContainer: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },

  forgotPassword: {
    color: '#c2c2c2',
    alignSelf: 'stretch',
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 30,
  },

  buttonText: {
    fontFamily: 'Fira Code, Roboto',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: -0.115,
    padding: 30,
  },
});
