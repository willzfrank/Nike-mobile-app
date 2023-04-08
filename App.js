import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import ProductScreen from './src/screens/ProductScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';

export default function App() {
  return (
    <View>
      {/* <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}
      <CartScreen />
      <StatusBar style="auto" />
    </View>
  );
}
