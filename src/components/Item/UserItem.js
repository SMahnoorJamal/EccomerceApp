import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchUserDetails } from '../../store/usersSlice';

export default function UserItem({ user }) {
  const dispatch = useDispatch();

  const openProfile = () => {
    if (user.html_url) Linking.openURL(user.html_url);
  };

  const openModal = () => {
    dispatch(fetchUserDetails(user.login));
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Pressable onPress={openModal}>
          <Text style={styles.login}>{user.login}</Text>
        </Pressable>
        <Pressable onPress={openProfile}>
          <Text style={styles.link}>View profile</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  avatar: { width: 48, height: 48, borderRadius: 24 },
  login: { fontSize: 16, fontWeight: '600' },
  link: { fontSize: 14, color: '#0a66c2', marginTop: 4 },
});