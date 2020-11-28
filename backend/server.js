"use strict";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Peer from "peer";

import controllers from "./controllers/index.js";

const { ExpressPeerServer } = Peer;
dotenv.config();

const IP = process.env.APP_IP || "127.0.4.102";
const PORT = process.env.APP_PORT || 54728;

const app = express();
app.use(cors());
app.use(express.json());

//Апи сервиса задач
app.get("/api/users", (req, res, next) => controllers.getUsers(req, res));
app.get("/api/tasks", (req, res, next) => controllers.getTasks(req, res));
app.get("/api/notice", (req, res, next) => controllers.getNotice(req, res));
app.post("/api/auth", (req, res, next) => controllers.auth(req, res));
app.get("/api/departmentsList", (req, res, next) =>
  controllers.departmentsList(req, res)
);
app.get("/api/departmentDetails", (req, res, next) =>
  controllers.departmentDetails(req, res)
);

app.get("/api/task/messages", (req, res, next) =>
  controllers.taskMessages(req, res)
);

app.get("/api/user/messages", (req, res, next) =>
  controllers.userMessages(req, res)
);
app.post("/api/user/addMessage", (req, res, next) =>
  controllers.addMessage(req, res)
);
app.post("/api/backupTask", (req, res, next) =>
  controllers.backupTask(req, res)
);

app.get("/", (req, res, next) => res.send({ message: "Rosatom server" }));

app.use("/static", express.static("./public"));
const server = app.listen(PORT);

//Проброс АПИ сервиса звонков
const peerServer = ExpressPeerServer(server, {
  path: "/voiceApi",
  proxied: true,
  debug: true,
});
app.use("/", peerServer);

console.log("Start at  :>> ", PORT);
console.log("PeerServer :>> START, OK!");
