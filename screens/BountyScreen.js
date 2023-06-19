import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ProgressBar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function FriendScreen() {
  const [fontsLoaded] = useFonts({
    'Just Another Hand': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
  });
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const handleBackButtonPress = () => {
    // Handle the back button press event here
    // For example, you can navigate to the previous screen or perform any other desired action
  };

  const handleFriendPress = (friend) => {
    // Handle the friend press event here
    console.log('Friend pressed:', friend);
  };

  const bountyAddingPress = () => {
    // Handle the friend press event here
    console.log('bounty added');
  };

  const fetchFriends = async () => {
    try {
      const response = await fetch('http://timber-api-env.eba-tvcu62mw.ap-southeast-2.elasticbeanstalk.com/request/all');
      const data = await response.json();
  
      const imageMapping = {
        0: require('../assets/Friend1.png'),
        1: require('../assets/Friend2.png'),
        2: require('../assets/Friend3.png'),
      };
  
      const updatedFriends = await Promise.all(
        data.map(async (friend, index) => {
          const friendResponse = await fetch(
            `http://timber-api-env.eba-tvcu62mw.ap-southeast-2.elasticbeanstalk.com/api/userProfile?id=${friend.postedBy}`
          );
          const friendData = await friendResponse.json();
  
          const imageIndex = index % 3; // Calculate the index of the Friend image (0, 1, or 2)
  
          return {
            name: friendData.name,
            requestTitle: friend.title,
            image: imageMapping[imageIndex], // Assign the appropriate image based on the index
            bountyDetails: friend.description,
          };
        })
      );
  
      setFriends(updatedFriends);
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };
  

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity onPress={() => handleBackButtonPress()}>
          <Ionicons name="arrow-back" size={70} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Bounty</Text>
          <TouchableOpacity style={styles.plusButton} onPress={() => bountyAddingPress()}>
            <Ionicons name="add-circle" size={55} color="#FAC143" />
          </TouchableOpacity>
        </View>
        {friends.map((friend, index) => (
          <TouchableOpacity key={index} style={styles.bountyContainer} onPress={() => handleFriendPress(friend)}>
            <View style={styles.bountyImageContainer}>
              <Image source={friend.image} style={styles.bountyImage} />
            </View>
            <View style={styles.bountyDetails}>
              <Text numberOfLines={2} style={styles.bountyName}>{friend.requestTitle}</Text>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.bountyDescription}>{friend.bountyDetails}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 250,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    top: 50,
    width: 350,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    height: 120,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
    fontSize: 110,
    textAlign: 'center',
    height: 120,
    top: 10,
    marginRight: 10,
    marginLeft: 60,
  },
  plusButton: {
    left: -10,
    padding: 5,
  },
  bountyContainer: {
    backgroundColor: '#F2D55B',
    borderRadius: 15,
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  bountyImageContainer: {
    marginRight: 10,
    width: 90,
    height: 90,
  },
  bountyImage: {
    width: 60,
    height: 90,
    borderRadius: 10,
    top: -45,
  },
  bountyDetails: {
    flex: 1,
    justifyContent: 'center', // Add this to center the bounty name vertically
  },
  bountyName: {
    fontWeight: 'bold',
    fontFamily: 'Just Another Hand',
    fontSize: 40, // Adjust the font size as needed
    color: 'black',
    marginLeft: -30,
    top: -10,
    alignSelf: 'center',
    textAlign: 'center', // Add this to center the bounty name horizontally
  },
  bountyDescription: {
    fontSize: 25,
    fontFamily: 'Just Another Hand',
    marginLeft: -100,
    marginTop: 10, // Adjust this value to align the bounty descriptions consistently
    color: 'black',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 100,
    left: 10,
    zIndex: 1,
  },
});
