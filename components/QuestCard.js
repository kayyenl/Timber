import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function QuestCard({ progress }) {
  const progressBarWidth = `${(progress / 10) * 100}%`;

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
      width: '92%',
      marginTop: 20,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    headerContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    progressBarContainer: {
      width: '100%',
      height: 20,
      borderRadius: 10,
      backgroundColor: '#D3D3D3',
    },
    progressBar: {
      height: '100%',
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
  
