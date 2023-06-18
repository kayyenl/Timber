import { View } from 'react-native'
import React, { useState } from 'react'
import { AppLoading } from 'expo'
import ProfileCard from '../components/ProfileCard'
import * as Font from 'expo-font';


export default function HomeScreen() {

  return (
    <View>
        <ProfileCard
        level="42"
        bountiesCleared="25"
        achievements="50"
        bountyPoints="350"
        />
    </View>
  )
}