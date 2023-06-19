import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ProgressBar } from 'react-native-paper';

export default function FriendScreen() {
  const [fontsLoaded] = useFonts({
    'Just Another Hand': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
  });

  const friends = [
    {
      name: 'Jennie Kim',
      image: require('../assets/Friend1.png'),
      skills: [
        { name: 'Skill 1', level: 0.8 },
        { name: 'Skill 2', level: 0.6 },
        { name: 'Skill 3', level: 0.4 },
        { name: 'Skill 4', level: 0.2 },
      ],
    },
    {
      name: 'Kim Minji',
      image: require('../assets/Friend2.png'),
      skills: [
        { name: 'Skill 5', level: 0.7 },
        { name: 'Skill 6', level: 0.5 },
        { name: 'Skill 7', level: 0.3 },
        { name: 'Skill 8', level: 0.1 },
      ],
    },
    {
      name: 'Jungkook',
      image: require('../assets/Friend3.png'),
      skills: [
        { name: 'SEO', level: 0.7 },
        { name: 'Production Software', level: 0.5 },
        { name: 'Serverside Programming', level: 0.3 },
        { name: 'IT Troubleshooting', level: 9.9 },
      ],
    },
  ];

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Friend List</Text>
        {friends.map((friend, index) => (
          <View key={index} style={styles.friendContainer}>
            <View style={styles.friendImageContainer}>
              <Image source={friend.image} style={styles.friendImage} />
            </View>
            <View style={styles.friendDetails}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <View style={styles.skillContainer}>
                {friend.skills.slice(0, 4).map((skill, skillIndex) => (
                  <View key={skillIndex} style={styles.skillProgressContainer}>
                    <Text style={styles.skillName}>{skill.name}</Text>
                    <ProgressBar
                      progress={skill.level}
                      color="#387BC6"
                      style={styles.progressBar}
                    />
                    <Text style={styles.skillLevel}>Lv.{(skill.level * 10).toFixed(0)}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 0,
    width: '100%',
    Height: 600,
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 80,
    Height:200,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
    fontSize: 100,
    textDecorationLine:'underline',
    textDecorationStyle: 'dotted',
    textAlign: 'center',
    marginBottom: 20,
  },
  friendContainer: {
    width: 370,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  friendImageContainer: {
    width: "27%",
    height: 120,
    top:-30,
    overflow: 'hidden',
    marginRight: 20,
    backgroundColor: 'yellow',
    marginLeft:-10
  },
  friendImage: {
    width: 90,
    height: 130,
    top:0
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
    marginBottom: 1,
  },
  skillContainer: {
    flexDirection: 'column',
  },
  skillProgressContainer: {
    marginBottom: -10,
  },
  skillName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 18,
    borderRadius: 10,
    marginTop:0,
  },
  skillLevel: {
    fontSize: 12,
    marginTop: 0,
    top:-15,
    left:4
  },
});
