import React, { useContext } from 'react'
import { BottomTabBar } from 'react-navigation'

import { ThemeContext } from '../../themes'

const ThemedTabBar: React.FC<any> = props => {
  const theme = useContext(ThemeContext)

  return (
    <BottomTabBar
      {...props}
      activeTintColor={theme.tabBar.active}
      inactiveTintColor={theme.tabBar.inactive}
      style={{
        backgroundColor: theme.tabBar.background,
      }}
    />
  )
}

export default ThemedTabBar
