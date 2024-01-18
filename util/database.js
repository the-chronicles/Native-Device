import * as SQLITE from "expo-sqlite";

const databbase = SQLITE.openDatabase("placed.db");

export function init() {
  databbase.transaction((tx) => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS places`);
  });
}
