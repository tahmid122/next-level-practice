import { Request, Response } from "express";
import { todoServices } from "./todo.service";

const createTodo = async (req: Request, res: Response) => {
  try {
    const { user_id, title, description } = req.body;
    const result = await todoServices.createTodo(user_id, title, description);
    return res.status(201).json({
      success: true,
      message: "User successfully created",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getAllTodos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await todoServices.getAllTodos(id as string);
    if (result.rows.length === 0) {
      return res
        .status(200)
        .json({ success: true, message: "No todo found", data: [] });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Todos fetched successfully",
        data: result.rows,
      });
  } catch (error: any) {
    return res.status(500).json({ success: true, message: error?.message });
  }
};
export const todoControllers = { createTodo, getAllTodos };
