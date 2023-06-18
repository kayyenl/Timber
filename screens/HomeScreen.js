import { View } from 'react-native';
import React, { useState } from 'react';
import { AppLoading } from 'expo';
import ProfileCard from '../components/ProfileCard';
import QuestCard from '../components/QuestCard';

export default function HomeScreen() {
  return (
    <View style={{
        width : "90%",
        height : "100%",
    }}>
      <ProfileCard
        level="42"
        bountiesCleared="25"
        achievements="50"
        bountyPoints="350"
      />
      <QuestCard progress={3} />
    </View>
  );
}
