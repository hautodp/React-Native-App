import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-ionicons';
import React from 'react';

import PageHome from '../../views/Home/PageHome';
import PageCart from '../../views/Home/PageCart';
import PageSearch from '../../views/Home/PageSearch';
import PageContact from '../../views/Home/PageContact';

const CustomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: PageHome},
    Cart: {screen: PageCart},
    Search: {screen: PageSearch},
    Contact: {screen: PageContact},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Cart') {
          iconName = 'cart';
        } else if (routeName === 'Search') {
          iconName = 'search';
        } else if (routeName === 'Contact') {
          iconName = 'contact';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default CustomTabNavigator;
