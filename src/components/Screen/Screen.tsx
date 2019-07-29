import React, { useContext } from 'react'
import { View } from 'react-native'

import { ThemeContext } from '../../themes'
import styles from './Screen.styles'

interface IProps {
  children: React.ReactNode
}

const Screen: React.FC<IProps> = ({ children }) => {
  const theme: any = useContext(ThemeContext)

  return <View style={[styles.container, { backgroundColor: theme.background }]}>{children}</View>
}

export default Screen
