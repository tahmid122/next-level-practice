import { Router } from "express";
import { todoControllers } from "./todo.controller";

const router = Router();
//-> /todos/
router.post("/", todoControllers.createTodo);
router.get("/:id", todoControllers.getAllTodos);
export const todoRoutes = router;
