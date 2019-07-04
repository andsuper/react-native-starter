import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Navigator from './components/Navigation'
import stores from './stores'

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Navigator />
      </Provider>
    )
  }
}
