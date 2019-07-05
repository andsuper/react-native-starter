import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from '../../screens/Home'
import SettingsScreen from '../../screens/Settings'

const RouteConfiguration = {
  Home: HomeScreen,
  Settings: SettingsScreen,
}

export default createDrawerNavigator(RouteConfiguration)
