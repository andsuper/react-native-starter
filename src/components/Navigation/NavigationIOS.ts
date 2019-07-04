import { createBottomTabNavigator } from 'react-navigation'

import HomeScreen from '../../screens/Home'

const NavigationIOS = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
})

export default NavigationIOS
