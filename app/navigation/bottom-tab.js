import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/chat';
import ContactScreen from '../screens/contact';
import DiscoverScreen from '../screens/discover';
import MeScreen from '../screens/me';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const tabIconsMap = {
    contact: require('../images/contact.png'),
    contactInactive: require('../images/contact-inactive.png'),
    chat: require('../images/chat.png'),
    chatInactive: require('../images/chat-inactive.png'),
    discover: require('../images/discover.png'),
    discoverInactive: require('../images/discover-inactive.png'),
    me: require('../images/me.png'),
    meInactive: require('../images/me-inactive.png'),
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'contact') {
              iconName = focused ? 'contact' : 'contactInactive';
            } else if (route.name === 'chat') {
              iconName = focused ? 'chat' : 'chatInactive';
            } else if (route.name === 'discover') {
              iconName = focused ? 'discover' : 'discoverInactive';
            } else {
              iconName = focused ? 'me' : 'meInactive';
            }
            return (
              <Image
                source={tabIconsMap[iconName]}
                style={{height: 20, width: 20}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1E90FF',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="contact"
          component={ContactScreen}
          options={{tabBarLabel: '联系人'}}
        />
        <Tab.Screen
          name="chat"
          component={ChatScreen}
          options={{tabBarLabel: '聊天'}}
        />
        <Tab.Screen
          name="discover"
          component={DiscoverScreen}
          options={{tabBarLabel: '发现'}}
        />
        <Tab.Screen
          name="me"
          component={MeScreen}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTab;
