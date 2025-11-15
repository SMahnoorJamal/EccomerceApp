// PhoneLoginScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PhoneLoginScreen = ({navigation}) => {
  const [phone, setPhone] = React.useState('');

  const handleGetCode = () => {
    // TODO: navigate or send OTP
    console.log('Phone:', phone);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* Gradient header and content */}
        <LinearGradient
          colors={['#7D1FFF', '#4A00B3']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.gradient}>
          {/* Back arrow */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              onPress={() => navigation && navigation.goBack()}>
              <Ionicons name="chevron-back" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Logo + text */}
          <View style={styles.centerBlock}>
            {/* Fake logo text – replace with Image if you have real logo */}
            <Text style={styles.logo}>stizi</Text>
            <Text style={styles.subtitle}>Welcome back</Text>
          </View>

          {/* Phone input */}
          <View style={styles.inputRow}>
            <View style={styles.countryCodeBox}>
              <Text style={styles.countryCodeText}>+1</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              keyboardType="phone-pad"
              placeholder="404-889-1058"
              placeholderTextColor="#C7BFE8"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Get Code button */}
          <TouchableOpacity style={styles.button} onPress={handleGetCode}>
            <Text style={styles.buttonText}>Get code</Text>
          </TouchableOpacity>

          {/* Disclaimer text */}
          <Text style={styles.disclaimer}>
            By providing your phone number, you agree Sitzi may{'\n'}
            send you texts with notifications and security codes.
          </Text>
        </LinearGradient>

        {/* Black bottom area (where keyboard shows) */}
        <View style={styles.bottomFill} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PhoneLoginScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  flex: {flex: 1},
  gradient: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 350,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  centerBlock: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 40,
    fontWeight: '800',
    color: '#7BFFDE', // minty color similar to screenshot
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#F3E9FF',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C0A6B',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 18,
  },
  countryCodeBox: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#3D158B',
    marginRight: 10,
  },
  countryCodeText: {
    color: '#F7EDFF',
    fontSize: 14,
    fontWeight: '600',
  },
  phoneInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 0,
  },
  button: {
    backgroundColor: '#7BFF7A',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 18,
  },
  buttonText: {
    color: '#13002E',
    fontWeight: '700',
    fontSize: 16,
  },
  disclaimer: {
    color: '#F3E9FFAA',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
  },
  bottomFill: {
    flex: 1,
    backgroundColor: '#000',
  },
});
