import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import { Svg, Circle } from 'react-native-svg';

export default function ProfileCard({ level, bountiesCleared, achievements, bountyPoints }) {
  const [fontsLoaded] = useFonts({
    'Just Another Hand': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
  });

  const calculateProgressBar = () => {
    const progress = parseInt(level) || 0;
    const maxProgress = 100;
    const circumference = 2 * Math.PI * 50; // Assuming radius of 50

    const progressValue = (progress / maxProgress) * circumference;
    const remainingValue = circumference - progressValue;

    return { progressValue, remainingValue };
  };

  const renderProgressBar = () => {
    const { progressValue, remainingValue } = calculateProgressBar();

    return (
      <Svg width="100" height="100">
        <Circle cx="50"c y="50" r="50" fill="none" stroke="#CCCCCC" strokeWidth="10"
        />
        <Circle cx="50" cy="50" r="50" fill="none" stroke="#F2DE89"
          strokeWidth="10" strokeLinecap="round"
          strokeDasharray={[progressValue, remainingValue]}
          transform="rotate(-90 50 50)"
        />
      </Svg>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.leftSection}>
          <Image
            source={require('../assets/ProfilePic.png')}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.rightSection}>
          <View style={styles.levelContainer}>
            {renderProgressBar()}
            <Text style={styles.levelText}>{level ? level : "Level 42"}</Text>
          </View>
          <View style={styles.attributesContainer}>
            <Text style={styles.attributeText}>Bounties Cleared: {bountiesCleared || "25"}</Text>
            <Text style={styles.attributeText}>Achievements: {achievements || "50"}/73</Text>
            <Text style={styles.attributeText}>Bounty Points: {bountyPoints || 350}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    width: '87%',
    height: '30%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  profilePicture: {
    width: '90%',
    height: '80%',
    left: 5,
    borderRadius: 10,
  },
  levelContainer: {
    alignItems: 'center',
  },
  levelText: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
    marginTop: -50, // Adjust as per your design
    color: '#F2DE89',
  },
  attributesContainer: {
    justifyContent: 'flex-end',
  },
  attributeText: {
    fontSize: 14,
    marginBottom: 5,
  },
});
