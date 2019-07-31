import React, { useContext } from 'react'
import { SafeAreaView, View } from 'react-native'

import { ThemeContext } from '../../themes'
import styles from './Screen.styles'

interface IProps {
  children: React.ReactNode
}

const Screen: React.FC<IProps> = ({ children }) => {
  const theme: any = useContext(ThemeContext)

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  )
}

export default Screen
