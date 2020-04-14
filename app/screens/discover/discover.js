import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from '../../components/item';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  _renderItem(item, index) {
    return (
      <View style={styles.container} key={index}>
        <ListItem {...item} key={index} />
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item, index}) => this._renderItem(item, index)}
        keyExtractor={(item) => item.id}
      />
    );
  }

  componentDidMount() {
    fetch('http://192.168.1.101:7001/api/discover')
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log('Something went wrong on api server!');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((result) => {
        console.log(result.data);
        this.setState({list: result.data});
      })
      .catch((error) => {
        console.log('catch err', error);
      });
  }
}

export default Discover;
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: 'white',
  },
});
