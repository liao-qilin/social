import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenWidth} from '../utils/screens';
function showDrawer(navigation) {
  //navigation.openDrawer();
}

const TopBar = (props) => {
  const navigation = props.navigation;
  const name = props.name;
  let showSearch = true;
  let showCross = true;
  if (name === 'me' || name === 'discover') {
    showCross = false;
    showSearch = false;
  }
  if (name === 'contact') {
    showSearch = false;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('on press more');
          showDrawer(navigation);
        }}>
        <Image
          source={require('../images/more.png')}
          style={[styles.icons, styles.more]}
        />
      </TouchableOpacity>
      <Text style={styles.desc}>Apple</Text>
      {showSearch ? (
        <TouchableOpacity>
          <Image
            source={require('../images/search.png')}
            style={[styles.icons, styles.search]}
          />
        </TouchableOpacity>
      ) : null}
      {showCross ? (
        <TouchableOpacity>
          <Image
            source={require('../images/cross.png')}
            style={[styles.icons, styles.cross]}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default TopBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e6e6e6',
    height: 40,
    alignItems: 'center' /*垂直局中*/,
  },
  icons: {
    width: 20,
    height: 20,
  },
  more: {
    marginLeft: 12,
  },
  cross: {
    marginRight: 12,
    alignSelf: 'flex-end',
  },
  search: {
    marginRight: 12,
    alignSelf: 'flex-end',
  },
  desc: {
    width: ScreenWidth - 32 * 3,
    textAlign: 'center',
  },
});
