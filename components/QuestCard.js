import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function QuestCard({ progress }) {
    const progressBarWidth = `${(progress / 10) * 100}%`;
    
    const [fontsLoaded] = useFonts({
        'Just Another Hand': require('../assets/fonts/JustAnotherHand-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    
    //just type v and them backspace. the formatting works after that

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Monthly Quest</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: progressBarWidth }]} />
      </View>
      <View style={styles.progressTextContainer}>
        <Text style={styles.progressText}>
          Bounties Cleared: {progress}/10
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      top: -80,
      borderRadius: 10,
      paddingTop: 20,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    headerContainer: {
      height: '20%',
      width: '100%',
      alignItems: 'center',
      marginBottom: 30,
    },
    headerText: {
      fontSize: 70,
      fontWeight: 'bold',
      fontFamily: 'Just Another Hand',
    },
    progressBarContainer: {
      width: '100%',
      height: 0,
      borderRadius: 10,
      backgroundColor: '#D3D3D3',
      zIndex: 20,
    },
    progressBar: {
      height: '50%',
      borderRadius: 10,
    },
    progressBarFill: {
      backgroundColor: '#F2DE89',
      borderRadius: 10,
    },
    progressTextContainer: {
      marginTop: 10,
    },
    progressText: {
      fontSize: 16,
    },
  });
  
