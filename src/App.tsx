import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { Provider, observer } from 'mobx-react'

import Navigator from './components/Navigation'
import RootStore from './stores'
import { ThemeProvider } from './themes'
import { database } from './utils'

const store = new RootStore()

const App = () => {
  const { theme } = store.application
  const [isInitializing, setIsInitializing] = useState(true)

  useEffect(() => {
    database
      .open()
      .catch() // @TODO: Log error with logging system
      .finally(() => setIsInitializing(false))
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

        {!isInitializing ? (
          <Navigator />
        ) : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={isInitializing} />
          </View>
        )}
      </ThemeProvider>
    </Provider>
  )
}

export default observer(App)
