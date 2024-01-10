// NavBarDemo.jsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const NavBarDemo = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={openSidebar} style={styles.sidebarButton}>
          <Text style={styles.buttonText}>Open Sidebar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Aniket</Text>

        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.buttonText}>Button</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    paddingTop: 40, // Adjust according to your needs
    zIndex: 2
  },
  sidebarButton: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  navButton: {
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'lightgray',
    width: 150,
    height: '100%',
    zIndex: 3,
  },
  sidebarItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sidebarText: {
    fontSize: 16,
  },
});

export default NavBarDemo;
