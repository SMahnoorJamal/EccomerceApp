import React, { useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, searchUsers } from '../../store/usersSlice';

export default function SearchInput() {
  const dispatch = useDispatch();
  const query = useSelector((s) => s.users.query);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      dispatch(searchUsers(query));
    }, 1000);
    return () => clearTimeout(timerRef.current);
  }, [query]);

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search GitHub users..."
        value={query}
        onChangeText={(t) => dispatch(setQuery(t))}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 12 },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
});