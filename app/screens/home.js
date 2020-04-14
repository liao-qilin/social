import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home screen~~</Text>
      <Button
        onPress={() =>
          navigation.navigate('Detail', {
            itemId: 10,
            otherParams: 'other params',
          })
        }
        title="go to detail"
      />
    </View>
  );
}
export default HomeScreen;
