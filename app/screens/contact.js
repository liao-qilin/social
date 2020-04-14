import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TopBar from '../components/top-bar';
import Friends from './contact/friends';
class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.route.name,
      navigation: props.navigation,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TopBar {...this.state} />
        <Friends />
      </View>
    );
  }
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
