import { Router } from "express";
import { todoControllers } from "./todo.controller";

const router = Router();
//-> /todos/
router.post("/", todoControllers.createTodo);
router.get("/:id", todoControllers.getAllTodos);
router.patch("/:id", todoControllers.updateTodo);
router.delete("/:id", todoControllers.deleteTodo);
router.patch("/toggle-status/:id", todoControllers.toggleStatus);
export const todoRoutes = router;
