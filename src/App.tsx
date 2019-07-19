import React from 'react'
import { StatusBar } from 'react-native'
import { Provider, observer } from 'mobx-react'

import { ThemeProvider } from './themes'
import Navigator from './components/Navigation'
import RootStore from './stores'

const App = () => {
  return (
    <Provider store={RootStore}>
      <ThemeProvider theme={RootStore.application.theme}>
        <StatusBar
          barStyle={RootStore.application.theme === 'light' ? 'dark-content' : 'light-content'}
        />
        <Navigator />
      </ThemeProvider>
    </Provider>
  )
}

export default observer(App)
