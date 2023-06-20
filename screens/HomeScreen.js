import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import QuestCard from '../components/QuestCard';
import NewsCard from '../components/NewsCard';

export default function HomeScreen() {
  const news = [
    'Jennie Kim helped Kang Haerin out!',
    'Kim Chaewon has reached level 40 in event handling',
    'Jungkook has reached level 20 in graphic design',
    'Jungkook has reached level 20 in Content Creation',
    'Welcome Lee Hyein to the Company!',
    'Jang Wonyoung has reached lvl 5 in Data Analysis',
  ];

  return (
    <ScrollView 
    contentContainerStyle={styles.scrollViewContent} >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
        <ProfileCard
          level="42"
          bountiesCleared="25"
          achievements="50"
          bountyPoints="350"
        />
        </View>
        <View style={styles.questContainer}>
          <QuestCard progress={3} />
        </View>
        <View style={styles.newsContainer}>
          <NewsCard news={news} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
    paddingBottom: 20, // Optional: Add some bottom padding if needed
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  profileContainer: {
    top: -130,
    width: 380,
    height: '60%',
    alignItems: 'center',
  },
  questContainer: {
    top: -110,
    width: 350,
    height: '30%',
    alignItems: 'center',
  },
  newsContainer: {
    width: '100%',
    alignItems: 'center',
    top: -218,
  },
});
