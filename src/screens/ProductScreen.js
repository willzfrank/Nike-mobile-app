import React from 'react';
import { FlatList } from 'react-native';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import products from '../data/products';

const ProductScreen = () => {
  const { width } = Dimensions.get('window');
  const itemWidth = (width - 20) / 2; // Subtracting 20 from width to account for margins

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View style={[styles.container, { width: itemWidth }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      )}
      //   keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  list: {
    paddingBottom: 10,
  },
});
