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

  /**
   * Opens the database connection.
   *
   * @returns {Promise<SQLiteDatabase>}
   */
  open(): Promise<SQLite.SQLiteDatabase> {
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

  /**
   * Loads a single configuration by the given key.
   *
   * @param {string} key
   * @returns {Promise<any>}
   */
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

  /**
   * Creates or updates the given configuration.
   *
   * @param {IConfiguration} configuration
   * @returns {Promise<void>}
   */
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

  /**
   * Returns the database instance.
   *
   * @private
   * @returns {Promise<SQLiteDatabase>}
   */
  private getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (this.database !== undefined) {
      return Promise.resolve(this.database)
    }

    return this.open()
  }

  /**
   * Updates the database tables.
   *
   * @private
   * @param {SQLiteDatabase} database
   * @returns {Promise<void>}
   */
  private updateDatabaseTables(database: SQLite.SQLiteDatabase): Promise<void> {
    return database.transaction(this.createTables).then(() => {
      return
    })
  }

  /**
   * Initializes the database tables.
   *
   * @private
   * @param {Transaction} transaction
   * @returns {void}
   */
  private createTables(transaction: SQLite.Transaction): void {
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
