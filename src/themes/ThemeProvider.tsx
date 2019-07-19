import React from 'react'
import { inject } from 'mobx-react'

import themes from './themes.json'

interface IProps {
  children: any
  theme: string
}

const ThemeContext = React.createContext({})

const ThemeProvider: React.FC<IProps> = ({ children, theme }) => {
  const themeConfiguration = themes.filter(item => item.key === theme)[0]

  return <ThemeContext.Provider value={themeConfiguration}>{children}</ThemeContext.Provider>
}

export default inject('store')(ThemeProvider)
export { ThemeContext }
