import React from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import UserItem from '../Item/UserItem';

export default function UserList() {
  const { list, loading, error } = useSelector((s) => s.users);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}><Text>{error}</Text></View>
    );
  }

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id?.toString() || item.login}
      renderItem={({ item }) => <UserItem user={item} />}
      contentContainerStyle={{ padding: 12 }}
      ListEmptyComponent={<Text style={styles.empty}>Type a query to search users…</Text>}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  empty: { textAlign: 'center', color: '#666', marginTop: 40 },
});