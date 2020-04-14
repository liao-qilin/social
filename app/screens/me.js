import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopBar from '../components/top-bar';
import Me from './me/me';

class MeScreen extends Component {
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
        <Me />
      </View>
    );
  }
}

export default MeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
});
