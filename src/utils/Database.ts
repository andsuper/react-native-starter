import SQLite from 'react-native-sqlite-storage'
import { default as getDatabaseName } from './getDatabaseName'

interface IDatabase {
  open(): Promise<SQLite.SQLiteDatabase>
}

class Database implements IDatabase {
  private databaseName = `${getDatabaseName()}.db`
  private database: SQLite.SQLiteDatabase | undefined

  open(): Promise<SQLite.SQLiteDatabase> {
    SQLite.enablePromise(true)

    return SQLite.openDatabase({
      name: this.databaseName,
      location: 'default',
    })
  }
}

export const database: Database = new Database()
