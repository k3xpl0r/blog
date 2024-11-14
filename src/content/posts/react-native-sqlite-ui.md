---
isDraft: true
isPublic: true
title: 'GUI for React Native SQLite'
publishDate: 2024-11-13
description: 'How to view tables, data in GUI for React Native SQLite applications'
tags: ["react-native", "orm", "drizzle", "sqlite", "mobile"]
---

Debugging SQLite on React Native can be hard as its not a typical DB where we could connect a DB client to visualize Schema, data or run queries on top of tables. This has become easy with a tool by Drizzle called *expo-drizzle-studio-plugin* which can be used for react native SQLite even if the project is not configured to use Drizzle ORM.

First we'll setup a basic React Native project using Expo.


For the SQLite I'm using expo-sqlite but other flavors of SQLite should also work. 

Now to the fun part. For attaching a DB client to the React Native SQLite, install expo-drizzle-studio-plugin which is drizzle studio designed for expo react native projects.

```bash
 npm install expo-drizzle-studio-plugin 
```

Then in the App.js/App.ts which is root of the project, import expo drizzle studio along with a connection object to the SQLite database that you want to visualize. An example goes as follows

```js
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync("sample.db");

export default function App() {
    useDrizzleStudio(db);

    /* REST OF THE CODE */
}
```

After you run the app, you should see a localhost URL in the console on which you should get the following UI.

INSERT IMAGE HERE

As of this writing, it has features like

- executing queries
- Visualizing schema

