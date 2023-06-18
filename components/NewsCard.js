import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewsCard({ news }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Latest News</Text>
      <View style={styles.divider} />
      {news.map((item, index) => (
        <Text key={index} style={styles.newsText}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '92%',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  newsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
