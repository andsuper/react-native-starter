import React from 'react'
import { View, Text } from 'react-native'

import styles from './Settings.styles'

interface Props {
  children: React.ReactChildren
}

const SettingsScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

export default SettingsScreen
