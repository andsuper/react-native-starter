import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { Provider, observer } from 'mobx-react'

import { ThemeProvider } from './utils'
import AppNavigation from './navigation'
import RootStore from './stores'

const store = new RootStore()

const App = () => {
  const { theme, isHydrating } = store.application

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />

        {isHydrating ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={isHydrating} />
          </View>
        ) : (
          <AppNavigation />
        )}
      </ThemeProvider>
    </Provider>
  )
}

export default observer(App)
