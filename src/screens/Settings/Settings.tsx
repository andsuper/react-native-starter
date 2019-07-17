import React from 'react'
import { View, Text } from 'react-native'

import i18n from '../../i18n'
import styles from './Settings.styles'

interface IProps {
  children: React.ReactChildren
}

const SettingsScreen: React.FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.formatString(i18n.settings.headline)}</Text>
    </View>
  )
}

export default SettingsScreen
