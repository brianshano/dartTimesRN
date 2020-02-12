import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  // Text,
  StatusBar,
} from 'react-native';
import {Button, ButtonGroup, Icon} from '@ui-kitten/components';
import Header from '../src/components/Header';
import StationPicker from '../src/components/StationPicker';
// const StarIcon = style => <Icon {...style} name="star" />;
// const StarIcon = '1';

export const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        <StationPicker />

        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Step One</Text>
            <ButtonGroup style={styles.buttonGroup}>
              {/* <Button icon={StarIcon} /> */}
              <Button />
              <Button />
              <Button />
            </ButtonGroup>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </Layout>
);

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#444',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#444',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonGroup: {
    margin: 8,
  },
});

export default HomeScreen;
