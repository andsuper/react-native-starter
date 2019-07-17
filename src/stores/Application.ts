import { action, observable, reaction } from 'mobx'

import i18n from '../i18n'
import { getDeviceLanguage } from '../utils'
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

    this.hydrateStore()

    reaction(() => this.language, language => i18n.setLanguage(language))
  }

  /**
   * Sets the app language.
   *
   * @param {string} language
   * @returns {void}
   */
  @action setLanguage(language: string): void {
    this.language = language
  }

  private hydrateStore(): void {
    // console.log('ApplicationStore --> hydrate')
    this.setLanguage(getDeviceLanguage())
  }
}

export default ApplicationStore
export { IApplicationStore }
