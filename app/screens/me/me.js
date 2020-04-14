import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from '../../components/item';

const UserInfo = (props) => {
  return (
    <View style={styles.usercontainer}>
      <Image
        style={styles.via}
        source={{uri: 'https://zhaoliangji.com/image/footlogo.png'}}
      />
      <View style={styles.userinfo}>
        <Text style={styles.name}>Kylin</Text>
        <View style={styles.info}>
          <Text style={styles.wechat}>微信号：qilin8026</Text>
          <Image
            style={styles.icon}
            source={require('../../images/qrcode.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../images/arrow.png')}
          />
        </View>
      </View>
    </View>
  );
};

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  _renderItem(item, index) {
    return (
      <View style={styles.container}>
        <ListItem {...item} key={index} />
      </View>
    );
  }
  componentDidMount() {
    fetch('http://192.168.1.101:7001/api/me')
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

  render() {
    return (
      <>
        <UserInfo />
        <FlatList
          data={this.state.list}
          renderItem={({item, index}) => this._renderItem(item, index)}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }
}

export default Me;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  usercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 10,
    marginBottom: 10,
  },
  userinfo: {
    flex: 1,
    flexDirection: 'column',
  },
  via: {
    height: 50,
    width: 50,
    marginRight: 10,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  wechat: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 14,
  },
  icon: {
    height: 10,
    width: 10,
    marginRight: 10,
  },
});
