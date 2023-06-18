import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import QuestCard from '../components/QuestCard';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ProfileCard
          level="42"
          bountiesCleared="25"
          achievements="50"
          bountyPoints="350"
        />
        <View style={styles.questContainer}>
          <QuestCard progress={3} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    top: -70,
    flexGrow: 1,
    width: '100%',
    paddingBottom: 20, // Optional: Add some bottom padding if needed
  },
  container: {
    width: '100%',
    height: '90%',
    alignItems: 'center',
  },
  questContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
});
