import React, { useEffect } from 'react'; 
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import SkillScreen from './screens/SkillScreen';
import FriendScreen from './screens/FriendScreen';
import BountyScreen from './screens/BountyScreen';



export default function App() {
  
  return (
    <ImageBackground
      source={require('./assets/TimberBG.png')} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <BountyScreen/>
        <BottomNav />
      </View>
    </ImageBackground>
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

