import ApplicationStore, { IApplicationStore } from './Application'

interface IRootStore {
  applicationStore: IApplicationStore
}

class RootStore implements IRootStore {
  applicationStore: IApplicationStore

  constructor() {
    this.applicationStore = new ApplicationStore(this)
  }
}

export default new RootStore()
export { IRootStore }
