# TypeScript

* ## Installation

  ```bash
  sudo npm install -g typescript ts-node
  ```

* ## Make a network request to fetch some JSON and print the result

  1. Take a look at the API we'll use to fetch data.
  2. Create a new project directory.
  3. Create a `package.json` file.
  4. Install axios to make a request.
  5. Write Code.

  ```bash
  api = jsonplaceholder.typicode.com/todos // Fake JSON API
  ```
  ```bash
  mkdir fetchjson
  cd fetchjson
  npm init -y
  ```

  Output :
  
  ```json
  {
    "name": "fetchjson",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  ```

  ```bash
  npm install axios
  ```

* ### Run a TypeScript file

  ```bash
  tsc index.ts
  node index.js
  ts-node index.ts
  ```
