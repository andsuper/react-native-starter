import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from '../../screens/Home'

const NavigationAndroid = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
})

export default NavigationAndroid
