import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <StatusBar/>
    <View style={styles.header}>
      <Text style={styles.title}>The most simple react-native carousel!</Text>
    </View>
    <ScrollView horizontal style={styles.carousel}>
      {Array.apply(null, Array(6)).map((_, index) => (
        <View key={index} style={index === 5 ? styles.lastItem : styles.item}>
          <View style={styles.imageOverlay}>
            <Image
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>item {index + 1}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 250,
    paddingTop: 50,
    paddingLeft: 20,
    width: '100%',
    backgroundColor: 'lightblue',
  },
  title: {fontSize: 24},
  carousel: {
    marginTop: -70,
  },
  item: {
    marginLeft: 70,
  },
  lastItem: {
    marginLeft: 70,
    marginRight: 70,
  },
  imageOverlay: {
    borderWidth: 1,
    borderRadius: 100,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100,
  },
  itemContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
