<h1 align="center">
  ✔️ Tasks API
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/amanda-santos/tasks-api">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/amanda-santos/tasks-api">

  <a href="https://github.com/amanda-santos/tasks-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/amanda-santos/tasks-api">
  </a>

  <a href="https://github.com/amanda-santos/tasks-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/amanda-santos/tasks-api">
  </a>
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;
</p>

## 📝 About the project

<p>This is Node.js project built for study purposes. Here a HTTP Rest API is implemented without any third-party libraries or databases, to explore core concepts of Node.js, like streams, routes and local files writing and reading.
</p>

<p>With this API it's possible to create, update, delete and mark tasks as complete. Each task has a title and a description. It's also possible to import tasks from a CSV file using streams.
<p>

Developed as part of Ignite Node.js (<a href="https://www.rocketseat.com.br/">Rocketseat</a>) 🚀
</p>

## 👩🏻‍💻 Technologies

Technologies used to develop this project:

- Node.js
- Javascript
- Regex
- CSV Parse

## 🚃 Routes

<table>
  <tr>
    <th>HTTP Method</th>
    <th>Route</th>
    <th>Description</th>
    <th>Request body</th>
  </tr>

  <tr>
    <td>GET</td>
    <td>/tasks</td>
    <td>Returns a list of the tasks</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>/tasks</td>
    <td>Creates a new task</td>
    <td>
      title
      <br />
      description
    </td>
  </tr>

  <tr>
    <td>PUT</td>
    <td>/tasks/:id</td>
    <td>Updates a task with the given ID</td>
    <td>
      title (optional)
      <br />
      description (optional)
      <br />
      completed_at (optional)
    </td>
  </tr>

  <tr>
    <td>PATCH</td>
    <td>/tasks/:id/complete</td>
    <td>Marks a task with the given ID as complete</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>DELETE</td>
    <td>/tasks/:id</td>
    <td>Deletes a task with the given ID</td>
    <td>N/A</td>
  </tr>
</table>

## 🖥 Preview



## ⌨ Getting started

### Running the server

- Run `npm i` to install the dependencies
- Run the development server with `npm run dev`
- Optionally, import the file `insomnia` on Insomnia to test the routes

### Running CSV stream import

- Update or replace the file `streams/tasks.csv` with your tasks
- Run `node streams/import-csv.js`

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork amanda-santos/tasks-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd tasks-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

---

Made with 💚 by Amanda Santos
