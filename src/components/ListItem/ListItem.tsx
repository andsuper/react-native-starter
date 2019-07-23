import React, { ReactElement, useContext } from 'react'
import { View, Text } from 'react-native'

import { ThemeContext } from '../../themes'
import styles from './ListItem.styles'

interface IProps {
  label: string | any
  control: ReactElement | string
}

const ListItem: React.FC<IProps> = ({ label, control, ...rest }) => {
  const theme: any = useContext(ThemeContext)

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.listItem.background, borderColor: theme.listItem.border },
      ]}
      {...rest}
    >
      <Text style={styles.label}>{label}</Text>
      {control}
    </View>
  )
}

export default ListItem
