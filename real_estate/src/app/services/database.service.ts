import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbConnection!: SQLiteDBConnection;

  constructor() { 
    this.init();
  }

  async init() {
    const sqlite = new SQLiteConnection(CapacitorSQLite);
    try {
      // Assuming the database is not encrypted and using the default location
      this.dbConnection = await sqlite.createConnection('mydb', false, 'no-encryption', 1, false);
      await this.dbConnection.open();
      console.log('Database initialized successfully');
    } catch (e) {
      console.error('Error initializing database', e);
    }
  }

  // Additional database operations methods here
}
