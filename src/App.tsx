import React from 'react'
import { Provider } from 'mobx-react'

import { ThemeProvider } from './themes'
import Navigator from './components/Navigation'
import RootStore from './stores'

const App = () => {
  return (
    <Provider store={RootStore}>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </Provider>
  )
}

export default App
