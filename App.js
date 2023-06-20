import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import BountyScreen from './screens/BountyScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FriendScreen from './screens/FriendScreen';
import SkillScreen from './screens/SkillScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bounty" component={BountyScreen} />
        <Stack.Screen name="Skill" component={SkillScreen} />
        <Stack.Screen name="Friend" component={FriendScreen} />
      </Stack.Navigator>
      <ImageBackground
        source={require('./assets/TimberBG.png')}
        style={styles.container}
      >
        <View style={styles.overlay}>
          <BottomNav />
        </View>
      </ImageBackground>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Adjust the opacity (0.4 in this case) or color as desired
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
