import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StatusBar, Text, View } from 'react-native'
import { Provider, observer } from 'mobx-react'

import Navigator from './components/Navigation'
import RootStore from './stores'
import { ThemeProvider } from './themes'
import { database } from './utils'

const store = new RootStore()

const App = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { theme } = store.application

  useEffect(() => {
    database
      .open()
      .then(() => setIsInitializing(false))
      .catch(() => setIsInitializing(false))
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

        {isInitializing ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={isInitializing} />
          </View>
        ) : (
          <Navigator />
        )}
      </ThemeProvider>
    </Provider>
  )
}

export default observer(App)
