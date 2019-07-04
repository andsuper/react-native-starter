import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import Navigator from './components/Navigation'
import stores from './stores'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...stores}>
        <Navigator />
      </Provider>
    )
  }
}
