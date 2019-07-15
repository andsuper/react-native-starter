import React from 'react'
import { Provider } from 'mobx-react'

import Navigator from './components/Navigation'
import stores from './stores'
import i18n from './i18n'
import { getDeviceLanguage } from './utils'

const App = () => {
  i18n.setLanguage(getDeviceLanguage())

  return (
    <Provider {...stores}>
      <Navigator />
    </Provider>
  )
}

export default App
