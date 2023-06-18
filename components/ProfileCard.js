import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

export default function ProfileCard({level, bountiesCleared, achievements, bountyPoints}) {
    const [fontsLoaded] = useFonts({
        'Just Another Hand': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
      });

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
            <Text style={styles.levelText}>{level ? level : "Level 42"}</Text>
          </View>
          <View style={styles.attributesContainer}>
            <Text style={styles.attributeText}>Bounties Cleared: {bountiesCleared | "25"}</Text>
            <Text style={styles.attributeText}>Achievements: {achievements | "50"}/73</Text>
            <Text style={styles.attributeText}>Bounty Points: {bountyPoints | 350}</Text>
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
    alignItems: 'flex-start',
  },
  levelText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
  },
  attributesContainer: {
    justifyContent: 'flex-end',
  },
  attributeText: {
    fontSize: 14,
    marginBottom: 5,
  },
});
