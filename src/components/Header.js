import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>Dart Times2</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'mediumseagreen',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    padding: 32,
  },
});
export default Header;
