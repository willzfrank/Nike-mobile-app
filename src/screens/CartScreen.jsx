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
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        // <Text style={styles.title}>Shopping Cart</Text>
        //{' '}
      </View> */}
      <FlatList
        data={cart}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.checkoutBtn}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c9c4c4',
    marginHorizontal: 20,
    paddingTop: 10,
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
    borderRadius: 30,
    padding: 20,
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
