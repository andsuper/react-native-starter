import React from 'react'
import { StatusBar } from 'react-native'
import { Provider, observer } from 'mobx-react'

import Navigator from './components/Navigation'
import RootStore from './stores'
import { ThemeProvider } from './themes'

const store = new RootStore()

const App = () => {
  const { theme } = store.application

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
        <Navigator />
      </ThemeProvider>
    </Provider>
  )
}

export default observer(App)
