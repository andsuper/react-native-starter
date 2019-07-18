import ApplicationStore, { IApplicationStore } from './Application'

interface IRootStore {
  application: IApplicationStore
}

class RootStore implements IRootStore {
  application: IApplicationStore

  constructor() {
    this.application = new ApplicationStore()
  }
}

export default new RootStore()
export { IRootStore }
