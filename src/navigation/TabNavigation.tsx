import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator, NavigationContainer } from 'react-navigation'

import i18n from '../i18n'
import ThemedTabBar from '../components/ThemedTabBar'
import HomeScreen from '../screens/Home'
import SettingsScreen from '../screens/Settings'

const Navigation: NavigationContainer = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: i18n.formatString(i18n.home.tabLabel),
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="home" color={tintColor} size={24} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: i18n.formatString(i18n.settings.tabLabel),
        tabBarIcon: ({ tintColor }: { tintColor: string }) => (
          <Icon name="settings" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: ThemedTabBar,
    tabBarOptions: {
      showLabel: false,
    },
  },
)

export default Navigation
