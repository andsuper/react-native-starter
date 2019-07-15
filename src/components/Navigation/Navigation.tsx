import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { createBottomTabNavigator } from 'react-navigation'

import i18n from '../../i18n'
import HomeScreen from '../../screens/Home'
import SettingsScreen from '../../screens/Settings'

export default createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: i18n.formatString(i18n.home.tabLabel),
        // tabBarIcon:
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: i18n.formatString(i18n.settings.tabLabel),
      },
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
