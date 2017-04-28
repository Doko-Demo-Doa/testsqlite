/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import SQLite from 'react-native-sqlite-storage';

export default class testsqlite extends Component {

  _testSqlite() {
    let db = SQLite.openDatabase("test.db", "1.0", "Test DB", 200000, () => console.log("Database opened"), () => console.log("SQL error"));
    db.transaction((tx) => {
      ex.executeSql('CREATE TABLE Employees(PersonID int)', [], (tx,results) => {
        console.log(results);
      });

      /*tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', [], (tx, results) => {
          console.log("Query completed");

          // Get rows with Web SQL Database spec compliance.

          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
          }
        });*/
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Text onPress={() => this._testSqlite()}>Test insert SQlite</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('testsqlite', () => testsqlite);
