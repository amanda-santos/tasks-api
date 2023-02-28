import { randomUUID } from "node:crypto";

import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { search } = req.query;

      const searchData = search
        ? {
            title: search,
            description: search,
          }
        : null;

      const tasks = database.select("tasks", searchData);

      return res.end(JSON.stringify(tasks));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title) {
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "Title is required." }));
      }

      if (!description) {
        return res
          .writeHead(400)
          .end(JSON.stringify({ message: "Description is required." }));
      }

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
      };

      database.insert("tasks", task);

      return res.writeHead(201).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const [task] = database.select("tasks", { id });

      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ message: "No task was found." }));
      }

      const updatedTask = req.body;

      Object.keys(updatedTask).forEach(
        (key) => updatedTask[key] === undefined && delete updatedTask[key]
      );

      database.update("tasks", id, updatedTask);

      return res.writeHead(204).end();
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (req, res) => {
      const { id } = req.params;

      const [task] = database.select("tasks", { id });

      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ message: "No task was found." }));
      }

      database.update("tasks", id, {
        completed_at: new Date().toISOString(),
      });

      return res.writeHead(204).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const [task] = database.select("tasks", { id });

      if (!task) {
        return res
          .writeHead(404)
          .end(JSON.stringify({ message: "No task was found." }));
      }

      database.delete("tasks", id);

      return res.writeHead(204).end();
    },
  },
];
