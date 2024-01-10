// BottomBar.jsx

import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const BottomBar = () => {
  const navigateToPage = page => {
    // Implement navigation to different pages
    // Example using React Navigation:
    // navigation.navigate(page);
  };

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        onPress={() => navigateToPage('Page1')}
        style={styles.bottomBarButton}>
        <Text style={styles.buttonText}>Page 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToPage('Page2')}
        style={styles.bottomBarButton}>
        <Text style={styles.buttonText}>Page 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToPage('Page3')}
        style={styles.bottomBarButton}>
        <Text style={styles.buttonText}>Page 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToPage('Page4')}
        style={styles.bottomBarButton}>
        <Text style={styles.buttonText}>Page 4</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  bottomBarButton: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default BottomBar;
