import React, { useContext } from 'react'
import { Text, View } from 'react-native'

import i18n from '../../i18n'
import styles from './Home.styles'
import { ThemeContext } from '../../themes'

const HomeScreen: React.FC<{}> = () => {
  const theme: any = useContext(ThemeContext)

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.welcome, { color: theme.color }]}>
        {i18n.formatString(i18n.home.welcome)}
      </Text>
    </View>
  )
}

export default HomeScreen
