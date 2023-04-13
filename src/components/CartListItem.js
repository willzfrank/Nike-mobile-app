import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CartListItem = ({ cartItem }) => {
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
            <Feather name="minus-circle" size={24} color="#8c8c8c" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
            <Feather name="plus-circle" size={24} color="#8c8c8c" />
          </TouchableOpacity>
          <Text style={styles.itemTotal}>
            ${cartItem.product.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  size: {
    fontSize: 16,
    color: '#8c8c8c',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 5,
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#8c8c8c',
  },
  itemTotal: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default CartListItem;
