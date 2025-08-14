import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, clearSelected } from '../../store/usersSlice';

export default function UserModal() {
  const dispatch = useDispatch();
  const { isModalVisible, selected } = useSelector((s) => s.users);

  const handleClose = () => {
    dispatch(closeModal());
    setTimeout(() => dispatch(clearSelected()), 250);
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={handleClose}>
      <View style={styles.sheet}>
        {selected ? (
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: selected.avatar_url }} style={styles.bigAvatar} />
            <Text style={styles.name}>{selected.name || selected.login}</Text>
            {selected.location ? (
              <Text style={styles.subtle}>📍 {selected.location}</Text>
            ) : null}

            <View style={styles.rowStats}>
              <Text style={styles.stat}>Followers: {selected.followers}</Text>
              <Text style={styles.stat}>Following: {selected.following}</Text>
            </View>

            <Pressable style={styles.btn} onPress={handleClose}>
              <Text style={styles.btnText}>Close</Text>
            </Pressable>
          </View>
        ) : (
          <Text>Loading…</Text>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  bigAvatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 8 },
  name: { fontSize: 18, fontWeight: '700' },
  subtle: { color: '#666', marginTop: 4 },
  rowStats: { flexDirection: 'row', gap: 16, marginTop: 12 },
  stat: { fontSize: 14 },
  btn: {
    marginTop: 18,
    backgroundColor: '#111827',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  btnText: { color: '#fff', fontWeight: '600' },
});