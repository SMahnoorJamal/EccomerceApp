import React, { useRef, useState } from 'react';
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

const OtpVerificationScreen = ({ navigation, route }) => {
  const { phone = '+1-404-889-1058' } = route?.params || {};
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input automatically
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const submitOtp = () => {
    const code = otp.join('');
    console.log('Entered OTP:', code);
    // You can navigate now
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Purple Gradient */}
        <LinearGradient
          colors={['#7D1FFF', '#4A00B3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>
            Enter the 6-digit code sent to your{'\n'}phone number {phone}
          </Text>

          {/* OTP Boxes */}
          <View style={styles.otpRow}>
            {otp.map((digit, i) => (
              <TextInput
                key={i}
                ref={(ref) => (inputs.current[i] = ref)}
                value={digit}
                onChangeText={(text) => handleChange(text, i)}
                onKeyPress={(e) => handleKeyPress(e, i)}
                maxLength={1}
                keyboardType="number-pad"
                style={styles.otpBox}
              />
            ))}
          </View>

          {/* Hint */}
          <Text style={styles.hint}>Full code is need to activate</Text>

          {/* Resend */}
          <View style={styles.resendRow}>
            <Text style={styles.dimText}>Didn't receive code? </Text>
            <TouchableOpacity>
              <Text style={styles.resendText}>Resend</Text>
            </TouchableOpacity>
          </View>

          {/* Disclaimer */}
          <Text style={styles.disclaimer}>
            By providing your phone number, you agree Sitzi may{'\n'}
            send you texts with notifications and security codes.
          </Text>
        </LinearGradient>

        {/* Black area under keyboard */}
        <View style={{ flex: 1, backgroundColor: '#000' }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;

const BOX_SIZE = 50;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000',
  },
  flex: { flex: 1 },
  gradient: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom:440,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginTop:80,
   alignItems:'center',
    marginBottom: 30,
    lineHeight: 23,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  otpBox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 12,
    backgroundColor: '#2F0A72',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  hint: {
    color: '#F5E8FF',
    textAlign: 'center',
    marginBottom: 8,
    fontSize: 13,
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dimText: {
    color: '#D8C9F8',
  },
  resendText: {
    color: '#1BB9FF',
    fontWeight: '700',
  },
  disclaimer: {
    color: '#F3E9FFAA',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
  },
});
