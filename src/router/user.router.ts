import express from "express";
import UserController from "../controller/user.controller";
import UserRepository from "../repository/user.repository";
import UserService from "../service/user.service";

const repo = new UserRepository();
const service = new UserService(repo);
const controller = new UserController(service);

const router = express.Router();
router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.addNewUser);

export default router;
