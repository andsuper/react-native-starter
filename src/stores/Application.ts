import { observable } from 'mobx'

import { IRootStore } from './index'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface IApplicationStore {
  isHydrating: boolean
  theme: Theme
  language: string
}

class ApplicationStore implements IApplicationStore {
  @observable isHydrating = false
  @observable theme = Theme.Light
  @observable language = 'en'

  rootStore: IRootStore

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore
  }
}

export default ApplicationStore
export { IApplicationStore }
