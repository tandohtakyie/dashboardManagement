import React, {Component} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class Dashboard_Activity extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Dashboard - App Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
    padding: 11,
  },
});
