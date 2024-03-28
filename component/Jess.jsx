import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Jess({ navigation }) {

  return (
    <View style={{  flex: 1 }}>
      <View
        style={{
          flex: 1 ,
          backgroundColor: '#25272A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 60,
        }}>
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
         
          </TouchableOpacity>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            overflow: 'hidden',
          }}>
         
        </View>

        <Text
          style={{
            color:'white',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          INGABIRE MARIE AIMEE
        </Text>
        <Text
          style={{
            color:'white',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Frontend Developer and Mobile App Developer
        </Text>
        <Text
          style={{
            color:'white',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Edit Profile
        </Text>
      </View>
     
        <TouchableOpacity
          onPress={() => navigation.navigate('Signin')}
          style={{ color: '#E2886F', borderWidth: 3, borderColor: '#41464A' }}>
          <Text style={{ color: '#C36F60', textAlign: 'center', padding: 7 }}>
            Log Out
          </Text>
        </TouchableOpacity>
      
    </View>
  );
}


