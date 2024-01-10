// Demo.jsx

import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const Demo = () => {
  const cardData = Array.from({ length: 10 }, (_, index) => `Card ${index + 1}`);
  const contactList = Array.from({ length: 10 }, (_, index) => `Contact ${index + 1}`);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContainer}
        // style={styles.scroller}
      >
        {cardData.map((card, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{card}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView style={styles.contactList}>
        {contactList.map((contact, index) => (
          <View key={index} style={styles.contactItem}>
            <Text style={styles.contactText}>{contact}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems : 'center'

  },
  card: {
    width: 300,
    height: 200,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactList: {
    flex: 1,
    marginTop: 20,
  },
  contactItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactText: {
    fontSize: 16,
  },
});

export default Demo;
