import { action, observable, reaction } from 'mobx'

import { getDeviceLanguage, database } from '../utils'
import i18n from '../i18n'

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

interface IApplicationStore {
  theme: Theme
  language: string
  isHydrating: boolean
  setLanguage: (language: string) => void
  setTheme: (theme: Theme) => void
}

class ApplicationStore implements IApplicationStore {
  @observable isHydrating = false
  @observable theme = Theme.Light
  @observable language = 'en'

  constructor() {
    this.hydrate()
    this.setupReactions()
  }

  /**
   * Action to set the app language.
   *
   * @param {string} language
   * @returns {void}
   */
  @action setLanguage(language: string): void {
    this.language = language
  }

  /**
   * Action to set the app theme.
   *
   * @param {Theme} theme
   * @returns {void}
   */
  @action setTheme(theme: Theme): void {
    this.theme = theme
  }

  /**
   * ...
   *
   * @private
   * @returns {void}
   */
  private hydrate(): void {
    this.isHydrating = true

    this.setLanguage(getDeviceLanguage())

    database
      .open()
      .then(() =>
        database.getConfiguration('theme').then(theme => {
          if (theme) {
            this.setTheme(theme)
          }
        }),
      )
      .finally(() => (this.isHydrating = false))
  }

  /**
   * ...
   *
   * @private
   * @returns {void}
   */
  private setupReactions(): void {
    reaction(() => this.language, language => i18n.setLanguage(language))
    reaction(
      () => this.theme,
      theme => database.updateConfiguration({ key: 'theme', value: theme }),
    )
  }
}

export default ApplicationStore
export { IApplicationStore, Theme }
