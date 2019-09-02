import React, { useContext } from 'react'
import { BottomTabBar, BottomTabBarProps } from 'react-navigation'

import { ThemeContext } from '../../utils'

const ThemedTabBar: React.FC<BottomTabBarProps> = props => {
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
