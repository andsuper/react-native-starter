import React, { ReactNode, useContext } from 'react'
import { Text } from 'react-native'

import { ThemeContext } from '../../themes'

interface IProps {
  children: ReactNode
  style?: any
}

const ThemedText: React.FC<IProps> = ({ children, style }) => {
  const theme = useContext(ThemeContext)

  return <Text style={[{ color: theme.text.default }, style]}>{children}</Text>
}

export default ThemedText
