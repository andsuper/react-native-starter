import React, { useContext } from 'react'
import { View } from 'react-native'

import { ThemeContext } from '../../themes'
import ThemedText from '../ThemedText'
import styles from './ListItem.styles'

interface IProps {
  label: any
  right?: any
  isFirst?: boolean
  isLast?: boolean
}

const ListItem: React.FC<IProps> = ({ label, right, isFirst, isLast, ...rest }) => {
  const theme: any = useContext(ThemeContext)

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.listItem.background, borderColor: theme.listItem.border },
      ]}
      {...rest}
    >
      <ThemedText style={styles.label}>{label}</ThemedText>
      {right}
    </View>
  )
}

export default ListItem
