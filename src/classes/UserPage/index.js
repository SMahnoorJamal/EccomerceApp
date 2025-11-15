import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UserPage({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* TAB BUTTONS */}
      <View style={styles.tabContainer}>
        
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate('UserPage')}
        >
          <Text style={styles.tabText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate('Stamps')}
        >
          <Text style={styles.tabText}>Stamps</Text>
        </TouchableOpacity>

        {/* 👉 CLICKABLE COUNTRIES BUTTON */}
        <TouchableOpacity
          style={styles.activeTabButton}
          onPress={() => navigation.navigate('Countries')}
        >
          <Text style={styles.activeTabText}>Countries</Text>
        </TouchableOpacity>

        {/* 👉 CLICKABLE MUTUAL BUTTON */}
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate('Mutual')}
        >
          <Text style={styles.tabText}>Mutual</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#3d0057',
  },

  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },

  activeTabButton: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#6aff5a',
  },

  tabText: { color: 'white' },
  activeTabText: { color: '#000', fontWeight: 'bold' },
});
