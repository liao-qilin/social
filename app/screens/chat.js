import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopBar from '../components/top-bar';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.route.name,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TopBar {...this.state} />
        <Text>chat</Text>
      </View>
    );
  }
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
