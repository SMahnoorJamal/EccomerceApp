import React from 'react';
import { View, Text } from 'react-native';

export default function MutualScreen ({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 22 }}>Mutual Screen</Text>
    </View>
  );
}
