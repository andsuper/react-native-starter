import React from 'react'
import { observer, inject } from 'mobx-react'

import themes from './themes.json'
import { IRootStore } from '../stores/index.js'

interface IProps {
  children: any
  store: IRootStore
}

const ThemeContext = React.createContext({})

const ThemeProvider: React.FC<IProps> = ({ children, store }) => {
  const theme = themes.filter(item => item.key === store.application.theme)[0]

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default inject('store')(observer(ThemeProvider))
export { ThemeContext }
