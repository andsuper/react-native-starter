import React from 'react'
import { Provider } from 'mobx-react'

import Navigator from './components/Navigation'
import RootStore from './stores'

const App = () => {
  return (
    <Provider store={RootStore}>
      <Navigator />
    </Provider>
  )
}

export default App
