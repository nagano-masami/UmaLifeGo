const mysql = require('mysql');

class DatabaseConnection {
  constructor() {
    this.connection = null;
  }

  connect(mysql_setting) {
    return new Promise((resolve, reject) => {
      this.connection = mysql.createConnection(mysql_setting);
      this.connection.connect((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  beginTransaction() {
    return new Promise((resolve, reject) => {
      this.connection.beginTransaction((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  commit() {
    return new Promise((resolve, reject) => {
      this.connection.commit((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  rollback() {
    return new Promise((resolve, reject) => {
      this.connection.rollback(() => {
        resolve();
      });
    });
  }

  query(sql, values) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve({ results, fields });
        }
      });
    });
  }

  end() {
    this.connection.end();
  }
}

module.exports = DatabaseConnection;
