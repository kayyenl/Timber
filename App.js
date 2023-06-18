import React, { useEffect } from 'react'; 
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  
  return (
    <ImageBackground
      source={require('./assets/TimberBG.png')} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <HomeScreen />
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

