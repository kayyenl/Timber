import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function SkillScreen() {
  const [fontsLoaded] = useFonts({
      'Just Another Hand': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

  const skills = [
    { name: 'Marketing', image: require('../assets/Marketing.png') },
    { name: 'Creativity', image: require('../assets/Creativity.png') },
    { name: 'Technology', image: require('../assets/Technology.png') },
    { name: 'Presentation', image: require('../assets/Presentation.png') },
    { name: 'Operations', image: require('../assets/Operations.png') },
    { name: 'People Skills', image: require('../assets/PeopleSkills.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.skillContainer}>
        <Text style={styles.greetingText}>Skills</Text>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillCard}>
              <Image source={skill.image} style={styles.skillImage} />
            </View>
          ))}
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
  skillContainer: {
    width: '90%',
    height: 715,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20, // Increase the left and right padding to make the white spaces wider
    paddingVertical: 20, // Adjust the top and bottom padding as desired
    borderRadius: 20,
  },
  greetingText: {
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
    fontSize: 80,
    textAlign: 'center',
    marginTop:20,
    width: '100%',
    height: '10%',
  },
  skillCard: {
    width: '28%',
    height: '14%',
    borderRadius: 20,
    backgroundColor: '#F2DE89',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    padding: "0%",
  },
  skillImage: {
    width: 70,
    height: 70,
    borderRadius: 10, // Apply border radius to the image
  },
});
