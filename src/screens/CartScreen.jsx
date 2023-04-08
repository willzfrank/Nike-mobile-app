import React from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CartListItem from '../components/CartListItem';
import cart from '../data/cart';

const CartScreen = () => {
  const renderItem = ({ item }) => <CartListItem cartItem={item} />;
  const renderFooter = () => (
    <View style={styles.footerList}>
      <View>
        <Text style={styles.footerText}>SubTotal</Text>
        <Text style={styles.footerText}>Delivery</Text>
        <Text style={styles.footerTextBold}>Total</Text>
      </View>
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>$410.00</Text>
        <Text style={styles.footerText}>$10.00</Text>
        <Text style={styles.footerTextBold}>$420.00</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={cart}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
      />
      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c9c4c4',
    marginHorizontal: 20,
    paddingTop: 20,
  },

  footerTextContainer: {
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    color: 'gray',
  },
  footerTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  checkoutBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 100,
    padding: 20,
    backgroundColor: 'black',
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
