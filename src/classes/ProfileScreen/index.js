// ProfileStampsScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const profileImage = { uri: 'https://i.pravatar.cc/150?img=47' }; // replace with require('...')
const placeImage = { uri: 'https://picsum.photos/80/80?random=1' }; // example
const placeImage2 = { uri: 'https://picsum.photos/80/80?random=2' };
const placeImage3 = { uri: 'https://picsum.photos/80/80?random=3' };
const placeImage4 = { uri: 'https://picsum.photos/80/80?random=4' };
const placeImage5 = { uri: 'https://picsum.photos/80/80?random=5' };

const stamps = [
  {
    id: '1',
    title: 'Venice Beach',
    date: 'March 23, 2020',
    timeAgo: '23 days ago',
    city: 'Birmingham, AL',
    image: placeImage,
  },
  {
    id: '2',
    title: 'Wax Museum',
    date: 'January 23, 2020',
    timeAgo: '2 months ago',
    city: 'Chicago, IL',
    image: placeImage2,
  },
  {
    id: '3',
    title: 'Hardrock Casino',
    date: 'March 23, 2020',
    timeAgo: '2 days ago',
    city: 'New Jersey, NJ',
    image: placeImage3,
  },
  {
    id: '4',
    title: 'Seafood at the Riverwalk',
    date: 'January 23, 2020',
    timeAgo: '2 months ago',
    city: 'Chicago, IL',
    image: placeImage4,
    badge: '4',
  },
  {
    id: '5',
    title: 'Hardrock Cafe',
    date: 'March 23, 2020',
    timeAgo: '2 days ago',
    city: 'Chicago, IL',
    image: placeImage5,
  },
  {
    id: '6',
    title: 'Nashville Aquarium',
    date: 'January 25, 2020',
    timeAgo: '2 months ago',
    city: 'Nashville, TN',
    image: placeImage,
    star: true,
  },
];

const ProfileScreen = ({navigation}) =>{
  const renderStamp = ({ item }) => (
    <TouchableOpacity activeOpacity={0.85} style={styles.cardContainer}>
      <View style={styles.cardLeft}>
        <Image source={item.image} style={styles.cardImage} />
      </View>
      <View style={styles.cardMiddle}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.cardSub}>
          {item.date} · {item.timeAgo}
        </Text>
        <Text style={styles.cardLocation}>{item.city}</Text>
      </View>
      <View style={styles.cardRight}>
        {item.star && (
          <Ionicons name="star" size={18} color="#F6D63B" style={{ marginBottom: 8 }} />
        )}
        {item.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}
        <Ionicons name="chevron-forward" size={20} color="#ffffffaa" />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      {/* Gradient Header */}
      <LinearGradient
        colors={['#7D1FFF', '#4A00B3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}>
        <View style={styles.headerTopRow}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
          <Ionicons name="ellipsis-horizontal" size={22} color="#fff" />
        </View>

        <View style={styles.profileRow}>
          <Image source={profileImage} style={styles.profileImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>Doja Cat</Text>
            <Text style={styles.profileLocation}>Atlanta, GA, USA</Text>
          </View>
        </View>

        {/* Segmented Tabs */}
        <View style={styles.topTabs}>
          <Text style={styles.topTabInactive}>Map</Text>
          <View style={styles.topTabActiveWrapper}>
            <Text style={styles.topTabActive}>Stamps</Text>
          </View>
 <TouchableOpacity onPress={() => navigation.navigate('OtpVerification')}>
    <Text style={styles.topTabInactive}>OTPLogin</Text>
  </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.topTabInactive}>Login</Text>
  </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Content area */}
      <View style={styles.content}>
        {/* Secondary tabs */}
        <View style={styles.secondaryTabsWrapper}>
          <View style={styles.secondaryTabs}>
            <View style={styles.secondaryTabActive}>
              <Text style={styles.secondaryTabActiveText}>Home</Text>
            </View>
            <View style={styles.secondaryTabInactive}>
              <Text style={styles.secondaryTabInactiveText}>Global</Text>
            </View>
          </View>
        </View>

        {/* Cards list */}
        <FlatList
          data={stamps}
          keyExtractor={item => item.id}
          renderItem={renderStamp}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const CARD_RADIUS = 14;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 22,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#ffffff55',
  },
  profileName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  profileLocation: {
    color: '#ffffffaa',
    marginTop: 3,
    fontSize: 13,
  },
  topTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  topTabInactive: {
    color: '#ffffffaa',
    marginRight: 18,
    fontSize: 14,
  },
  topTabActiveWrapper: {
    backgroundColor: '#1BF2A3',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginRight: 18,
  },
  topTabActive: {
    color: '#220044',
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    flex: 1,
    backgroundColor: '#000000',
  },
  secondaryTabsWrapper: {
    alignItems: 'center',
    marginTop: 16,
  },
  secondaryTabs: {
    flexDirection: 'row',
    backgroundColor: '#151515',
    borderRadius: 20,
    padding: 2,
  },
  secondaryTabActive: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  secondaryTabInactive: {
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 6,
  },
  secondaryTabActiveText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 13,
  },
  secondaryTabInactiveText: {
    color: '#ffffffaa',
    fontSize: 13,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 30,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#4A00B3',
    borderRadius: CARD_RADIUS,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardLeft: {
    marginRight: 10,
  },
  cardImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  cardMiddle: {
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  cardSub: {
    color: '#ffffffaa',
    fontSize: 12,
    marginBottom: 2,
  },
  cardLocation: {
    color: '#ffffffcc',
    fontSize: 12,
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 6,
  },
  badge: {
    backgroundColor: '#A020F0',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginBottom: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
});
