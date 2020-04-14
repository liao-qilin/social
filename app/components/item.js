import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
const ListItem = (props) => {
  console.log('props:', props);
  return props.items.map((item) => {
    return (
      <TouchableOpacity>
        <View style={styles.container} key={item.name}>
          <Image style={styles.icon} source={{uri: item.via}} />
          <Text style={styles.name}>{item.name}</Text>
          <Image style={styles.arrow} source={require('../images/arrow.png')} />
        </View>
        <View style={{height: 1, backgroundColor: '#e6e6e6', flex: 1}} />
      </TouchableOpacity>
    );
  });
};

export default ListItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  name: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  arrow: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});
