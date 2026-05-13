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

export const todoControllers = { createTodo };
