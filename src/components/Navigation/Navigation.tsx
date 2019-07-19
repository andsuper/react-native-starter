import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { observer, inject } from 'mobx-react'
import { createBottomTabNavigator } from 'react-navigation'

import i18n from '../../i18n'
import HomeScreen from '../../screens/Home'
import SettingsScreen from '../../screens/Settings'

const Navigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: i18n.formatString(i18n.home.tabLabel),
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="home" color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: i18n.formatString(i18n.settings.tabLabel),
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="settings" color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        // backgroundColor:
      },
    },
  },
)

export default inject('store')(observer(Navigation))
