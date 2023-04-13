import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import ProductScreen from '../screens/ProductScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const renderCartButton = () => (
    <TouchableOpacity style={styles.cartIcon}>
      <FontAwesome name="shopping-cart" size={18} color="black" />
      <Text style={styles.cartIconNumber}>1</Text>
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Nike Sneakers"
          component={ProductScreen}
          options={{
            headerStyle: styles.navigationHeader,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="Shopping Cart"
          component={CartScreen}
          options={{
            headerRight: renderCartButton,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigationHeader: {
    // backgroundColor: 'red',
  },

  cartIcon: {
    flexDirection: 'row',
  },

  cartIconNumber: {
    marginLeft: 5,
    fontSize: 12,
  },
});

export default Navigation;
