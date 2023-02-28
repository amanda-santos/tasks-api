import fs from "node:fs/promises";

// import.meta.url is the current location of this file
// this allows the database to be created always in the same location, instead of somewhere related to where the command is run
const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  // this makes the database a private property
  #database = {};

  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table, search) {
    let data = this.#database[table] ?? [];

    if (search) {
      data = data.filter((row) => {
        return Object.entries(search).some(([key, value]) => {
          return row[key].includes(value);
        });
      });
    }

    return data;
  }

  insert(table, data) {
    const dataWithDefaultFields = {
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(dataWithDefaultFields);
    } else {
      this.#database[table] = [dataWithDefaultFields];
    }

    this.#persist();

    return dataWithDefaultFields;
  }

  update(table, id, newData) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      const originalData = this.#database[table][rowIndex];

      this.#database[table][rowIndex] = {
        ...originalData,
        ...newData,
        updated_at: new Date().toISOString(),
      };

      this.#persist();
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }
}
