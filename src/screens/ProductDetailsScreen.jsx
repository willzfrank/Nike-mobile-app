import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailsScreen = ({ navigation }) => {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const renderItem = ({ item }) => {
    const screenWidth = Dimensions.get('window').width;
    return (
      <Image
        source={{ uri: item }}
        style={{
          width: screenWidth,
          height: 300,
          resizeMode: 'contain',
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={selectedProduct.images}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            style={{ backgroundColor: '#f6f6f6' }}
          />
          <View style={styles.textView}>
            <Text style={styles.title}>{selectedProduct.name}</Text>
            <Text style={styles.price}>
              ${selectedProduct.price.toFixed(2)}
            </Text>
            <Text style={styles.details}>{selectedProduct.description}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Shopping Cart')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>
            Add {selectedProduct.name} to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 1,
  },

  textView: {
    padding: 15,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  details: {
    fontSize: 16,
    lineHeight: 23,
    marginTop: 10,
    fontWeight: '300',
    textAlign: 'left',
  },

  button: {
    marginTop: 20,
    borderRadius: 5,
    padding: 20,
    position: 'absolute',
    width: '90%',
    bottom: 20,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
