import React from 'react'
import { Text, View } from 'react-native'

import i18n from '../../i18n'
import styles from './Home.styles'

const HomeScreen: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{i18n.formatString(i18n.home.welcome)}</Text>
    </View>
  )
}

export default HomeScreen
