import React, { useContext } from 'react'
import { BottomTabBar } from 'react-navigation'

import { ThemeContext } from '../../themes'

const ThemedTabBar: React.FC<any> = props => {
  const theme = useContext(ThemeContext)

  return (
    <BottomTabBar
      {...props}
      style={{
        backgroundColor: theme.tabBarBackground,
      }}
    />
  )
}

export default ThemedTabBar
