import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'

import NavigationIOS from './NavigationIOS'
import NavigationAndroid from './NavigationAndroid'

export default createAppContainer(Platform.OS === 'ios' ? NavigationIOS : NavigationAndroid)
