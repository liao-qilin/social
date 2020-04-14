import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TopBar from '../components/top-bar';
import Discover from './discover/discover';

class DiscoverScreen extends Component {
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
        <Discover />
      </View>
    );
  }
}

export default DiscoverScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
});
