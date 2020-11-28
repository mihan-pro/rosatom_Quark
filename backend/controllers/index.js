import getUsers from "./getUsers.js";
import getTasks from "./getTasks.js";
import getNotice from "./getNotice.js";
import departmentsList from "./departmentsList.js";
import departmentDetails from "./departmentDetails.js";
import taskMessages from "./taskMessages.js";
import auth from "./auth.js";
import userMessages from "./userMessages.js";
import addMessage from "./addMessage.js";
import backupTask from "./backupTask.js";

const controllers = {
  getUsers,
  getTasks,
  getNotice,
  departmentsList,
  departmentDetails,
  taskMessages,
  auth,
  userMessages,
  addMessage,
  backupTask,
};
export default controllers;
