import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebaseconfig';
 function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // const auth= FIREBASE_AUTH;

  const validateForm = () => {
      let valid = true

      // Validate email
      if (email.trim() == '') {
          setEmailError('Email is required')
          valid = false
      } else if (!isValidEmail(email)) {
          setEmailError('Invalid email format')
          valid = false
      } else {
          setEmailError('')
      }
    // Validate password
    if (password.trim() == '') {
      setPasswordError('Password is required')
      valid = false
  } else {
      setPasswordError('')
  }

  return valid
}

const handleSubmit = async () => {
  if (validateForm()) {
      // Perform form submission
      navigation.navigate('mytab')
      console.log('Form submitted:', email, password)
 
      try{
        const response = await createUserWithEmailAndPassword (FIREBASE_AUTH,email,password);
        console.log(response);
        console.log('already authenticated');
      }
      catch(error) {
        console.error(error)
      }
      
        navigation.navigate('login')
  }
}

const isValidEmail = (email) => {
  // Basic email validation regex
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        mode="offline"
        label="Email Address"
        underlineColor="transparent"
        value={email}
        onChangeText={setEmail}
        error={emailError}
      />
      {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        mode="offline"
        label="Password"
        underlineColor="transparent"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={passwordError}
      />
      {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>log in </Text>
      </TouchableOpacity>
      <View style={styles.socialIcons}>
        <AntDesign name="google" size={32} color="red" style={styles.icon} />
        <AntDesign name="linkedin-square" size={32} color="#0077b5" style={styles.icon} />
        <AntDesign name="github" size={32} color="black" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgb(122,91,10)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Login;
