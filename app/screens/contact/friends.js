import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const UserItem = (props) => {
  return (
    <View>
      <Text style={styles.letter}>A</Text>
      <View style={styles.userInfo}>
        <Image
          style={styles.via}
          source={{
            uri:
              'https://cdn.huodao.hk/upload_img/20200402/b3c8510eb377201e8cc80fb46c64125a.jpg',
          }}
        />
        <Text style={styles.name}>阿伦</Text>
      </View>
      <View style={styles.userInfo}>
        <Image
          style={styles.via}
          source={{
            uri:
              'https://cdn.huodao.hk/upload_img/20200402/b3c8510eb377201e8cc80fb46c64125a.jpg',
          }}
        />
        <Text style={styles.name}>阿华田</Text>
      </View>
    </View>
  );
}

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  _renderItem(item) {
    console.log('render item', item.letter);
    const users = item.users;
    return (
      <View>
        <Text style={styles.letter}>{item.letter}</Text>
        {users.map((user, key) => {
          return (
            <View style={styles.userInfo} key={user.id}>
              <Image
                style={styles.via}
                source={{
                  uri: user.via,
                }}
              />
              <Text style={styles.name}>{user.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
  componentDidMount() {
    fetch('http://192.168.1.101:7001/api/friends')
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          console.log('Something went wrong on api server!');
          throw new Error('Something went wrong on api server!');
        }
      })
      .then((result) => {
        // console.log(result.data);
        this.setState({list: result.data});
      })
      .catch((error) => {
        console.log('catch err', error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item}) => this._renderItem(item)}
        keyExtractor={(item) => item.letter}
      />
    );
  }
}

export default Friends;
const styles = StyleSheet.create({
  letter: {
    backgroundColor: '#dbdbdb',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 15,
  },
  via: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 15,
    marginLeft: 15,
  },
  name: {
    fontSize: 14,
    borderBottomColor: '#dbdbdb',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
});
