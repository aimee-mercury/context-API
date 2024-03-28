import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function DrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#2B2D30', padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <Text style={{ color: 'white', fontSize: 18, marginBottom: 20 }}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('InboxScreen')}>
        <Text style={{ color: 'white', fontSize: 18 }}>Inbox</Text>
      </TouchableOpacity>
    </View>
  );
}
