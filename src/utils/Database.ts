import SQLite from 'react-native-sqlite-storage'

import { default as getDatabaseName } from './getDatabaseName'

interface IConfiguration {
  [key: string]: string
}

interface IDatabase {
  open(): Promise<SQLite.SQLiteDatabase>
  getConfiguration(key: string): Promise<void>
  updateConfiguration(configuration: IConfiguration): Promise<void>
}

class Database implements IDatabase {
  private databaseName = `${getDatabaseName()}.db`
  private database: SQLite.SQLiteDatabase | undefined

  open(): Promise<SQLite.SQLiteDatabase> {
    SQLite.DEBUG(true)
    SQLite.enablePromise(true)

    let databaseInstance: SQLite.SQLiteDatabase

    return SQLite.openDatabase({
      name: this.databaseName,
      location: 'default',
    })
      .then(db => {
        databaseInstance = db

        return this.updateDatabaseTables(databaseInstance)
      })
      .then(() => {
        this.database = databaseInstance
        return databaseInstance
      })
  }

  getConfiguration(key: string): Promise<any> {
    return this.getDatabase()
      .then(db => db.executeSql(`SELECT value FROM configurations WHERE key = ?;`, [key]))
      .then(([results]) => {
        return results.rows.length > 0 ? results.rows.item(0).value : null
      })
      .catch(error => {
        /* tslint:disable */
        // @TODO: Log error
        console.error(error)
        return
      })
  }

  updateConfiguration(configuration: IConfiguration): Promise<void> {
    return this.getDatabase()
      .then(db =>
        db.executeSql(`INSERT OR REPLACE INTO configurations VALUES(?, ?);`, [
          configuration.key,
          configuration.value,
        ]),
      )
      .then(() => {
        return
      })
      .catch(error => {
        /* tslint:disable */
        // @TODO: Log error
        console.error(error)
        return
      })
  }

  private getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (this.database !== undefined) {
      return Promise.resolve(this.database)
    }

    return this.open()
  }

  private updateDatabaseTables(database: SQLite.SQLiteDatabase): Promise<void> {
    return database.transaction(this.createTables).then(() => {
      return
    })
  }

  private createTables(transaction: SQLite.Transaction) {
    // Settings table
    transaction.executeSql(`
      CREATE TABLE IF NOT EXISTS configurations (
        key TEXT PRIMARY KEY UNIQUE NOT NULL,
        value TEXT
      );
    `)
  }
}

export const database: Database = new Database()
