import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import store from './src/store';
import SearchInput from './src/components/Input/SearchInput';
import UserList from './src/components/List/UserList';
import UserModal from './src/components/Modal/UserModal';

export default function App() {
     {console.log('App.js loaded')}
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f6f8' }}>
        <StatusBar />
     
        <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>GitHub Users</Text>
        </View>
        <SearchInput />
        <View style={{ flex: 1 }}>
          <UserList />
        </View>
        <UserModal />
      </SafeAreaView>
    </Provider>
  );
}
