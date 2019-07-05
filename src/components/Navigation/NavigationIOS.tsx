import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../../screens/Home'
import SettingsScreen from '../../screens/Settings'

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        const key = getIconKey(routeName)

        return <Icon name={key} color={tintColor || undefined} />
      },
    }),
  },
)

function getIconKey(route: string): string {
  switch (route) {
    case 'Settings':
      return 'settings'
    default:
      return 'home'
  }
}
