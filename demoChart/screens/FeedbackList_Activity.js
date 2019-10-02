import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';

export default class FeedbackList_Activity extends Component {
  static navigationOptions = {
    title: 'Feedback results',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Feedback results</Text>
      </View>
    );
  }

  async componentDidMount() {
    const feedbacks = await ajax.getAllFeedbacks();
    console.log(feedbacks);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6f9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
