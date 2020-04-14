import React from 'react';
import {Button} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
const DetailScreen = ({navigation}) => {
  return (
    <Button
      title="btn"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
}

export default DetailScreen;
